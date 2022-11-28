import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FloatingIpActions {
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
   * getFloatingIpsIdActions - Get all Actions for a Floating IP
   *
   * Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
  **/
  getFloatingIpsIdActions(
    req: operations.GetFloatingIpsIdActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFloatingIpsIdActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFloatingIpsIdActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/floating_ips/{id}/actions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetFloatingIpsIdActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFloatingIpsIdActions200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFloatingIpsIdActionsActionId - Get an Action for a Floating IP
   *
   * Returns a specific Action object for a Floating IP.
  **/
  getFloatingIpsIdActionsActionId(
    req: operations.GetFloatingIpsIdActionsActionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFloatingIpsIdActionsActionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFloatingIpsIdActionsActionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/floating_ips/{id}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFloatingIpsIdActionsActionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postFloatingIpsIdActionsAssign - Assign a Floating IP to a Server
   *
   * Assigns a Floating IP to a Server.
  **/
  postFloatingIpsIdActionsAssign(
    req: operations.PostFloatingIpsIdActionsAssignRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFloatingIpsIdActionsAssignResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFloatingIpsIdActionsAssignRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/floating_ips/{id}/actions/assign", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostFloatingIpsIdActionsAssignResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postFloatingIpsIdActionsChangeDnsPtr - Change reverse DNS entry for a Floating IP
   *
   * Changes the hostname that will appear when getting the hostname belonging to this Floating IP.
  **/
  postFloatingIpsIdActionsChangeDnsPtr(
    req: operations.PostFloatingIpsIdActionsChangeDnsPtrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFloatingIpsIdActionsChangeDnsPtrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFloatingIpsIdActionsChangeDnsPtrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/floating_ips/{id}/actions/change_dns_ptr", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostFloatingIpsIdActionsChangeDnsPtrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postFloatingIpsIdActionsChangeProtection - Change Floating IP Protection
   *
   * Changes the protection configuration of the Floating IP.
  **/
  postFloatingIpsIdActionsChangeProtection(
    req: operations.PostFloatingIpsIdActionsChangeProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFloatingIpsIdActionsChangeProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFloatingIpsIdActionsChangeProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/floating_ips/{id}/actions/change_protection", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostFloatingIpsIdActionsChangeProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postFloatingIpsIdActionsUnassign - Unassign a Floating IP
   *
   * Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.
  **/
  postFloatingIpsIdActionsUnassign(
    req: operations.PostFloatingIpsIdActionsUnassignRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFloatingIpsIdActionsUnassignResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFloatingIpsIdActionsUnassignRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/floating_ips/{id}/actions/unassign", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostFloatingIpsIdActionsUnassignResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
