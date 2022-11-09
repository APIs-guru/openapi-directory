import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://graphhopper.com/api/1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // GetRouteInfo - Coverage information
  /** 
   * Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.
   * 
  **/
  GetRouteInfo(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetRouteInfoResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/route/info";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRouteInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.infoResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AsyncClusteringProblem - Batch Cluster Endpoint
  /** 
   * 
   * Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
   * long running problems only. The work flow is asynchronous:
   * 
   * - send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
   * - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
   *   towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.
   * 
  **/
  AsyncClusteringProblem(
    req: operations.AsyncClusteringProblemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AsyncClusteringProblemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AsyncClusteringProblemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/cluster/calculate";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AsyncClusteringProblemResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.jobId = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AsyncVrp - POST route optimization problem (batch mode)
  /** 
   * 
   * To solve a vehicle routing problem, perform the following steps:
   * 
   * 1.) Make a HTTP POST to this URL
   * 
   * ```
   * https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
   * ```
   * 
   * It returns a job id (job_id).
   * 
   * 2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:
   * 
   * ```
   * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
   * ```
   * 
   * We recommend to query the solution every 500ms until it returns 'status=finished'.
   * 
   * **Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
   * the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.
   * 
  **/
  AsyncVrp(
    req: operations.AsyncVrpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AsyncVrpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AsyncVrpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vrp/optimize";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AsyncVrpResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.jobId = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CalculateMatrix - Batch Matrix Endpoint
  /** 
   * Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.
   * 
   * The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):
   *  * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ "job_id": "7ac65787-fb99-4e02-a832-2c3010c70097" }`
   *  * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`
   * 
   * Here are some full examples via curl:
   * ```bash
   * $ curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]" -d '{"points":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}'
   * {"job_id":"7ac65787-fb99-4e02-a832-2c3010c70097"}
   * ```
   * 
   * Pick the returned `job_id` and use it in the next GET requests:
   * ```bash
   * $ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
   * {"status":"waiting"}
   * ```
   * 
   * When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:
   * ```bash
   * $ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
   * {"solution":{"weights":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],"info":{"copyrights":["GraphHopper","OpenStreetMap contributors"]}},"status":"finished"}
   * ```
   * 
   * Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:
   * ```json
   * {"message":"Cannot find from_points: 1"}
   * ```
   * And the optional `hints` array.
   * 
  **/
  CalculateMatrix(
    req: operations.CalculateMatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CalculateMatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CalculateMatrixRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/matrix/calculate";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CalculateMatrixResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.jobId = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetClusterSolution - GET Batch Solution Endpoint
  /** 
   * This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
   * You can fetch it with the job_id, you have been sent.
   * 
  **/
  GetClusterSolution(
    req: operations.GetClusterSolutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClusterSolutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClusterSolutionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/cluster/solution/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetClusterSolutionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.clusterResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.getClusterSolution404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGeocode - Geocoding Endpoint
  /** 
   * 
   * ### Introduction
   * 
   * ![Geocoding Example](./img/geocoding-example.png)
   * 
   * _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
   * For example the conversion from `Berlin` to `52.5170365,13.3888599`.
   * 
   * _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).
   * 
  **/
  GetGeocode(
    req: operations.GetGeocodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeocodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeocodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/geocode";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGeocodeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.geocodingResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIsochrone - Isochrone Endpoint
  /** 
   * ### Example
   * You can get an example response via:
   * 
   * ```
   * curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
   * ```
   * 
   * Don't forget to replace the placeholder with your own key.
   * 
   * ### Introduction
   * ![Isochrone screenshot](./img/isochrone-example.png)
   * 
   * An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
   * With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.
   * 
   * ### Use Cases
   * Some possible areas in which this API may be useful to you:
   * 
   * - real estate analysis
   * - realtors
   * - vehicle scheduling
   * - geomarketing
   * - reach of electric vehicles
   * - transport planning
   * - logistics (distribution and retail network planning)
   * 
   * ### API Clients and Examples
   * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).
   * 
  **/
  GetIsochrone(
    req: operations.GetIsochroneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIsochroneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIsochroneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/isochrone";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIsochroneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.isochroneResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMatrix - GET Matrix Endpoint
  /** 
   * With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
   * as it works out-of-the-box in the browser. If possible you should
   * prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
   * and can also gzip the **request**. (Note, that all endpoints return gzipped responses).
   * 
  **/
  GetMatrix(
    req: operations.GetMatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMatrixRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/matrix";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMatrixResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.matrixResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMatrixSolution - GET Batch Matrix Endpoint
  /** 
   * This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.
   * 
  **/
  GetMatrixSolution(
    req: operations.GetMatrixSolutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMatrixSolutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMatrixSolutionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/matrix/solution/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMatrixSolutionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.matrixResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRoute - GET Route Endpoint
  /** 
   * The GET request is the most simple one: just specify the parameter in the URL and you are done.
   * Can be tried directly in every browser.
   * 
  **/
  GetRoute(
    req: operations.GetRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRouteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/route";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRouteResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.routeResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case 501:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSolution - GET the solution (batch mode)
  /** 
   * 
   * Take the job id and fetch the solution for the vehicle routing problem from this URL:
   * 
   * ```
   * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
   * ```
   * 
   * You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).
   * 
  **/
  GetSolution(
    req: operations.GetSolutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSolutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSolutionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/vrp/solution/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSolutionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.response = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSolution404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostGpx - Map-match a GPX file
  /** 
   * ### Example
   * You get an example response for a GPX via:
   * 
   * ```
   * curl -XPOST -H "Content-Type: application/gpx+xml" "https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]" --data @/path/to/some.gpx
   * ```
   * 
   * A minimal working GPX file looks like
   * ```gpx
   * <gpx>
   *  <trk>
   *   <trkseg>
   *    <trkpt lat="51.343657" lon="12.360708"></trkpt>
   *    <trkpt lat="51.343796" lon="12.361337"></trkpt>
   *    <trkpt lat="51.342784" lon="12.361882"></trkpt>
   *   </trkseg>
   *  </trk>
   * </gpx>
   * ```
   * 
   * ### Introduction
   * ![Map Matching screenshot](./img/map-matching-example.gif)
   * 
   * The Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital
   * road network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.
   * 
   * In the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.
   * 
   * Most of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.
   * 
   * ### API Clients and Examples
   * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).
   * 
   * ### Limits and Counts
   * The cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).
   * 
   * One request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard.
   * 
  **/
  PostGpx(
    req: operations.PostGpxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostGpxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostGpxRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/match";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostGpxResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.routeResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMatrix - POST Matrix Endpoint
  /** 
   * 
   * The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.
   * In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.
   * Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request.
   * The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters
   * please refer to the [guide of the GET endpoint](#operation/getMatrix).
   * 
   * **Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.
   * 
   * For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:
   * ```json
   * { "points": [[11,10], [22,20]], "vehicle": "car" }
   * ```
   * 
   * A complete curl Example:
   * ```bash
   * curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]" -d '{"elevation":false,"out_arrays":["weights", "times"],"from_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"to_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"vehicle":"car"}'
   * ```
   * 
  **/
  PostMatrix(
    req: operations.PostMatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMatrixRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/matrix";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMatrixResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.matrixResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRoute - POST Route Endpoint
  /** 
   * Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
   * If you are familiar with POST requests and JSON then do not hesitate to continue here.
   * 
   * Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
   * has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
   * speed up the request.
   * 
   * To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
   * The effected parameters are: `points`, `point_hints` and `snap_preventions`.
   * 
   * **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.
   * 
   * For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
   * ```json
   * { "points": [[11,10], [22,20]] }
   * ```
   * Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
   * similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).
   * 
   * Example:
   * ```bash
   * curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d '{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}'
   * ```
   * 
  **/
  PostRoute(
    req: operations.PostRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRouteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/route";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRouteResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.routeResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case 501:
            if (MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SolveClusteringProblem - POST Cluster Endpoint
  /** 
   * 
   * The Cluster endpoint is used with a POST request towards
   * `https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
   * Please note that for problems that take longer than 10 seconds a bad request error is returned.
   * In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.
   * 
  **/
  SolveClusteringProblem(
    req: operations.SolveClusteringProblemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SolveClusteringProblemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SolveClusteringProblemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/cluster";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SolveClusteringProblemResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.clusterResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SolveVrp - POST route optimization problem
  /** 
   * 
   * To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).
   * 
   * To solve a new vehicle routing problem, make a HTTP POST to this URL
   * 
   * ```
   * https://graphhopper.com/api/1/vrp?key=<your_key>
   * ```
   * 
   * It returns the solution to this problem in the JSON response.
   * 
   * Please note that this URL is very well suited to solve minor problems.
   * Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
   * To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.
   * 
  **/
  SolveVrp(
    req: operations.SolveVrpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SolveVrpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SolveVrpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vrp";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SolveVrpResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.response = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
