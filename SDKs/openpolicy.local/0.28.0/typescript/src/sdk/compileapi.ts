import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CompileApi {
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
   * postCompile - Compile
   *
   * This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):
   * 
   * ```yaml
   * package example
   * allow {
   *   input.subject.clearance_level >= data.reports[_].clearance_level
   * }
   * ```
   * Compile API **request body** so that it contain the following fields:
   * 
   * | Field | Type | Required | Description |
   * | --- | --- | --- | --- |
   * | `query` | `string` | Yes | The query to partially evaluate and compile. |
   * | `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |
   * | `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `["input"]`]). |
   * 
   * For example:
   * 
   * ```json
   * {
   *   "query": "data.example.allow == true",
   *   "input": {
   *     "subject": {
   *       "clearance_level": 4
   *     }
   *   },
   *   "unknowns": [
   *     "data.reports"
   *     ]
   * }
   * ```
   * ### Partial evaluation
   * In some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.
   *
   * https://blog.openpolicyagent.org/partial-evaluation-162750eaf422 - Partial evaluation article
  **/
  postCompile(
    req: operations.PostCompileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCompileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCompileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/compile";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCompileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postCompile200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fourHundred = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fourHundred = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
