import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class RouteOptimizationApi {
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
   * asyncVrp - POST route optimization problem (batch mode)
   *
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
  asyncVrp(
    req: operations.AsyncVrpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AsyncVrpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AsyncVrpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vrp/optimize";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AsyncVrpResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.jobId = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalErrorMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSolution - GET the solution (batch mode)
   *
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
  getSolution(
    req: operations.GetSolutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSolutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSolutionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/vrp/solution/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSolutionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.response = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSolution404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * solveVrp - POST route optimization problem
   *
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
  solveVrp(
    req: operations.SolveVrpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SolveVrpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SolveVrpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vrp";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.SolveVrpResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.response = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalErrorMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
