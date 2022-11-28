import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class MatrixApi {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * calculateMatrix - Batch Matrix Endpoint
   *
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
  calculateMatrix(
    req: operations.CalculateMatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CalculateMatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CalculateMatrixRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/matrix/calculate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CalculateMatrixResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.jobId = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMatrix - GET Matrix Endpoint
   *
   * With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
   * as it works out-of-the-box in the browser. If possible you should
   * prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
   * and can also gzip the **request**. (Note, that all endpoints return gzipped responses).
   * 
  **/
  getMatrix(
    req: operations.GetMatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMatrixRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/matrix";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMatrixResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.matrixResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMatrixSolution - GET Batch Matrix Endpoint
   *
   * This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.
   * 
  **/
  getMatrixSolution(
    req: operations.GetMatrixSolutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMatrixSolutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMatrixSolutionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/matrix/solution/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMatrixSolutionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.matrixResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMatrix - POST Matrix Endpoint
   *
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
  postMatrix(
    req: operations.PostMatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMatrixRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/matrix";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostMatrixResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.matrixResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
