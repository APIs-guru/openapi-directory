import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.openfigi.com/{basePath}",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * getMappingValuesKey - Get values for enum-like fields.
  **/
  getMappingValuesKey(
    req: operations.GetMappingValuesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMappingValuesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMappingValuesKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mapping/values/{key}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMappingValuesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMappingValuesKey200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `*/*`)) {
                res.getMappingValuesKey400WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `*/*`)) {
                res.getMappingValuesKey500WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postMapping - Allows mapping from third-party identifiers to FIGIs.
  **/
  postMapping(
    req: operations.PostMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMappingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mapping";

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
        const res: operations.PostMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bulkMappingJobResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `*/*`)) {
                res.postMapping400WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `*/*`)) {
                res.postMapping401WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `*/*`)) {
                res.postMapping406WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 413:
            if (utils.MatchContentType(contentType, `*/*`)) {
                res.postMapping413WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `*/*`)) {
                res.postMapping500WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
