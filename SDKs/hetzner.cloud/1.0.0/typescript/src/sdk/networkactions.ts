import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class NetworkActions {
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
   * getNetworksIdActions - Get all Actions for a Network
   *
   * Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
  **/
  getNetworksIdActions(
    req: operations.GetNetworksIdActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworksIdActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworksIdActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{id}/actions", req.pathParams);
    
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
        const res: operations.GetNetworksIdActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworksIdActionsActionId - Get an Action for a Network
   *
   * Returns a specific Action for a Network.
  **/
  getNetworksIdActionsActionId(
    req: operations.GetNetworksIdActionsActionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworksIdActionsActionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworksIdActionsActionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{id}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworksIdActionsActionIdResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postNetworksIdActionsAddRoute - Add a route to a Network
   *
   * Adds a route entry to a Network.
   * 
   * Note: if the Network object changes during the request, the response will be a “conflict” error.
   * 
  **/
  postNetworksIdActionsAddRoute(
    req: operations.PostNetworksIdActionsAddRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNetworksIdActionsAddRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNetworksIdActionsAddRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{id}/actions/add_route", req.pathParams);

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
        const res: operations.PostNetworksIdActionsAddRouteResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postNetworksIdActionsAddSubnet - Add a subnet to a Network
   *
   * Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.
   * 
   * Note: if the parent Network object changes during the request, the response will be a “conflict” error.
   * 
  **/
  postNetworksIdActionsAddSubnet(
    req: operations.PostNetworksIdActionsAddSubnetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNetworksIdActionsAddSubnetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNetworksIdActionsAddSubnetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{id}/actions/add_subnet", req.pathParams);

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
        const res: operations.PostNetworksIdActionsAddSubnetResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postNetworksIdActionsChangeIpRange - Change IP range of a Network
   *
   * Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.
   * 
   * For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.
   * 
   * After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.
   * 
   * Note: if the Network object changes during the request, the response will be a “conflict” error.
   * 
  **/
  postNetworksIdActionsChangeIpRange(
    req: operations.PostNetworksIdActionsChangeIpRangeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNetworksIdActionsChangeIpRangeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNetworksIdActionsChangeIpRangeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{id}/actions/change_ip_range", req.pathParams);

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
        const res: operations.PostNetworksIdActionsChangeIpRangeResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postNetworksIdActionsChangeProtection - Change Network Protection
   *
   * Changes the protection configuration of a Network.
   * 
   * Note: if the Network object changes during the request, the response will be a “conflict” error.
   * 
  **/
  postNetworksIdActionsChangeProtection(
    req: operations.PostNetworksIdActionsChangeProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNetworksIdActionsChangeProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNetworksIdActionsChangeProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{id}/actions/change_protection", req.pathParams);

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
        const res: operations.PostNetworksIdActionsChangeProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postNetworksIdActionsDeleteRoute - Delete a route from a Network
   *
   * Delete a route entry from a Network.
   * 
   * Note: if the Network object changes during the request, the response will be a “conflict” error.
   * 
  **/
  postNetworksIdActionsDeleteRoute(
    req: operations.PostNetworksIdActionsDeleteRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNetworksIdActionsDeleteRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNetworksIdActionsDeleteRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{id}/actions/delete_route", req.pathParams);

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
        const res: operations.PostNetworksIdActionsDeleteRouteResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postNetworksIdActionsDeleteSubnet - Delete a subnet from a Network
   *
   * Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.
   * 
   * Note: if the Network object changes during the request, the response will be a “conflict” error.
   * 
  **/
  postNetworksIdActionsDeleteSubnet(
    req: operations.PostNetworksIdActionsDeleteSubnetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNetworksIdActionsDeleteSubnetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNetworksIdActionsDeleteSubnetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{id}/actions/delete_subnet", req.pathParams);

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
        const res: operations.PostNetworksIdActionsDeleteSubnetResponse = {statusCode: httpRes.status, contentType: contentType};
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
