import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class TargetGroups {
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
   * createNetworkSmTargetGroup - Add a target group
   *
   * Add a target group
  **/
  createNetworkSmTargetGroup(
    req: operations.CreateNetworkSmTargetGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSmTargetGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSmTargetGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/targetGroups", req.pathParams);

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
        const res: operations.CreateNetworkSmTargetGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSmTargetGroup201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSmTargetGroup - Delete a target group from a network
   *
   * Delete a target group from a network
  **/
  deleteNetworkSmTargetGroup(
    req: operations.DeleteNetworkSmTargetGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSmTargetGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSmTargetGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSmTargetGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmTargetGroup - Return a target group
   *
   * Return a target group
  **/
  getNetworkSmTargetGroup(
    req: operations.GetNetworkSmTargetGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmTargetGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmTargetGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", req.pathParams);
    
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
        const res: operations.GetNetworkSmTargetGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmTargetGroup200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmTargetGroups - List the target groups in this network
   *
   * List the target groups in this network
  **/
  getNetworkSmTargetGroups(
    req: operations.GetNetworkSmTargetGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmTargetGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmTargetGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/targetGroups", req.pathParams);
    
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
        const res: operations.GetNetworkSmTargetGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmTargetGroups200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSmTargetGroup - Update a target group
   *
   * Update a target group
  **/
  updateNetworkSmTargetGroup(
    req: operations.UpdateNetworkSmTargetGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSmTargetGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSmTargetGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkSmTargetGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSmTargetGroup200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
