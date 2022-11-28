import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.nexmo.com/ni",
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

/* SDK Documentation: https://developer.nexmo.com/api/number-insight*/
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
   * getNumberInsightAdvanced - Advanced Number Insight (sync)
   *
   * Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number synchronously, in the same way that the basic and standard endpoints do.
   * 
   * Vonage recommends accessing the Advanced API **asynchronously** using the `/advanced/async` endpoint, to avoid timeouts.
   * 
   * Note that this endpoint also supports `POST` requests.
   * 
  **/
  getNumberInsightAdvanced(
    req: operations.GetNumberInsightAdvancedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumberInsightAdvancedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumberInsightAdvancedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/advanced/{format}", req.pathParams);
    
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
        const res: operations.GetNumberInsightAdvancedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNumberInsightAdvanced200ApplicationJsonOneOf = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumberInsightAsync - Advanced Number Insight (async)
   *
   * Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) number information **asynchronously** using the URL specified in the `callback` parameter.  recommends asynchronous use of the Number Insight Advanced API, to avoid timeouts.
   * 
   * Note that this endpoint also supports `POST` requests.
   * 
  **/
  getNumberInsightAsync(
    req: operations.GetNumberInsightAsyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumberInsightAsyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumberInsightAsyncRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/advanced/async/{format}", req.pathParams);
    
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
        const res: operations.GetNumberInsightAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNumberInsightAsync200ApplicationJsonOneOf = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumberInsightBasic - Basic Number Insight
   *
   * Provides [basic number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.
   * 
   * Note that this endpoint also supports `POST` requests.
   * 
  **/
  getNumberInsightBasic(
    req: operations.GetNumberInsightBasicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumberInsightBasicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumberInsightBasicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/basic/{format}", req.pathParams);
    
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
        const res: operations.GetNumberInsightBasicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.niResponseJsonBasic = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumberInsightStandard - Standard Number Insight
   *
   * Provides [standard number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.
   * 
   * Note that this endpoint also supports `POST` requests.
   * 
  **/
  getNumberInsightStandard(
    req: operations.GetNumberInsightStandardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumberInsightStandardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumberInsightStandardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/standard/{format}", req.pathParams);
    
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
        const res: operations.GetNumberInsightStandardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNumberInsightStandard200ApplicationJsonOneOf = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
