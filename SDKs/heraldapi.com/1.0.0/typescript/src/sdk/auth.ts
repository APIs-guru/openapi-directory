import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Auth {
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
   * postAuthToken - /auth/token
   *
   * Generate Herald API access tokens. These tokens expire after 24 hours and can be used to access any auth-protected Herald API endpoint. To use these tokens in future requests, include them as a bearer token in the "Authorization" header. Below is an example flow:
   * 
   * First, use your API key to get an access token:
   * ``` http
   * POST /auth/token
   * 
   * {
   *   "api_key": "06Go1GZaEb3VlMf2pUA7PzWrBokCybFmgqR075kIBdM="
   * }
   * ```
   * 
   * The response will look like this:
   * ``` json
   * {
   *   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg",
   *   "expires_at": 1646680150
   * }
   * ```
   * 
   * Then use that token in future requests, like so:
   * ``` http
   * GET /producers
   * Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg
   * ```
  **/
  postAuthToken(
    req: operations.PostAuthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/auth/token";

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
        const res: operations.PostAuthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postAuthToken200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
