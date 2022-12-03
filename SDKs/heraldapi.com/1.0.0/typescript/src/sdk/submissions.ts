import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Submissions {
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
   * getSubmissionsSubmissionId - /submissions/{submission_id}
   *
   * ### Get a submission
   * 
   * Get the latest details for a specific [submission](https://www.heraldapi.com/docs/submission).
  **/
  getSubmissionsSubmissionId(
    req: operations.GetSubmissionsSubmissionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubmissionsSubmissionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubmissionsSubmissionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/submissions/{submission_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSubmissionsSubmissionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSubmissionsSubmissionId200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSubmissions - /submissions
   *
   * ### Create a submission
   * 
   * A [submission](https://www.heraldapi.com/docs/submission) creates quotes by sending an application to the institutions associated with a list of desired products. A submission can be for a single product or multiple products.
   * 
   * > The `application` object of the request can either be a full application (with all `risk_values` and `coverage_values`), or the `id` of a completed application created via [`/applications`](../reference/HeraldAPI.v1.yaml/paths/~1applications/post). See the 'examples' dropdown to the right for example requests and responses.
  **/
  postSubmissions(
    req: operations.PostSubmissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSubmissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSubmissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/submissions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
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
        const res: operations.PostSubmissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postSubmissions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postSubmissions400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
