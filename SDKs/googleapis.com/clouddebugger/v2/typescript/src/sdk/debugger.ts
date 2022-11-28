import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Debugger {
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
   * clouddebuggerDebuggerDebuggeesBreakpointsDelete - Deletes the breakpoint from the debuggee.
  **/
  clouddebuggerDebuggerDebuggeesBreakpointsDelete(
    req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * clouddebuggerDebuggerDebuggeesBreakpointsGet - Gets breakpoint information.
  **/
  clouddebuggerDebuggerDebuggeesBreakpointsGet(
    req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBreakpointResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * clouddebuggerDebuggerDebuggeesBreakpointsList - Lists all breakpoints for the debuggee.
  **/
  clouddebuggerDebuggerDebuggeesBreakpointsList(
    req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/debugger/debuggees/{debuggeeId}/breakpoints", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listBreakpointsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * clouddebuggerDebuggerDebuggeesBreakpointsSet - Sets the breakpoint to the debuggee.
  **/
  clouddebuggerDebuggerDebuggeesBreakpointsSet(
    req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/set", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setBreakpointResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * clouddebuggerDebuggerDebuggeesList - Lists all the debuggees that the user has access to.
  **/
  clouddebuggerDebuggerDebuggeesList(
    req: operations.ClouddebuggerDebuggerDebuggeesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClouddebuggerDebuggerDebuggeesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClouddebuggerDebuggerDebuggeesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/debugger/debuggees";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ClouddebuggerDebuggerDebuggeesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDebuggeesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
