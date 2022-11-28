import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FirewallActions {
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
   * getFirewallsIdActions - Get all Actions for a Firewall
   *
   * Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
  **/
  getFirewallsIdActions(
    req: operations.GetFirewallsIdActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFirewallsIdActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFirewallsIdActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firewalls/{id}/actions", req.pathParams);
    
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
        const res: operations.GetFirewallsIdActionsResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getFirewallsIdActionsActionId - Get an Action for a Firewall
   *
   * Returns a specific Action for a Firewall.
  **/
  getFirewallsIdActionsActionId(
    req: operations.GetFirewallsIdActionsActionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFirewallsIdActionsActionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFirewallsIdActionsActionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firewalls/{id}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFirewallsIdActionsActionIdResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postFirewallsIdActionsApplyToResources - Apply to Resources
   *
   * Applies one Firewall to multiple resources.
   * 
   * Currently servers (public network interface) and label selectors are supported.
   * 
   * #### Call specific error codes
   * 
   * | Code                        | Description                                             |
   * |-----------------------------|---------------------------------------------------------|
   * | `firewall_already_applied`  | Firewall was already applied on resource                |
   * | `incompatible_network_type` | The Network type is incompatible for the given resource |
   * 
  **/
  postFirewallsIdActionsApplyToResources(
    req: operations.PostFirewallsIdActionsApplyToResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFirewallsIdActionsApplyToResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFirewallsIdActionsApplyToResourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firewalls/{id}/actions/apply_to_resources", req.pathParams);

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
        const res: operations.PostFirewallsIdActionsApplyToResourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
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
   * postFirewallsIdActionsRemoveFromResources - Remove from Resources
   *
   * Removes one Firewall from multiple resources.
   * 
   * Currently only Servers (and their public network interfaces) are supported.
   * 
   * #### Call specific error codes
   * 
   * | Code                       | Description                                    |
   * |----------------------------|------------------------------------------------|
   * | `firewall_already_removed` | Firewall was already removed from the resource |
   * 
  **/
  postFirewallsIdActionsRemoveFromResources(
    req: operations.PostFirewallsIdActionsRemoveFromResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFirewallsIdActionsRemoveFromResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFirewallsIdActionsRemoveFromResourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firewalls/{id}/actions/remove_from_resources", req.pathParams);

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
        const res: operations.PostFirewallsIdActionsRemoveFromResourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
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
   * postFirewallsIdActionsSetRules - Set Rules
   *
   * Sets the rules of a Firewall.
   * 
   * All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
   * 
  **/
  postFirewallsIdActionsSetRules(
    req: operations.PostFirewallsIdActionsSetRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFirewallsIdActionsSetRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFirewallsIdActionsSetRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firewalls/{id}/actions/set_rules", req.pathParams);

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
        const res: operations.PostFirewallsIdActionsSetRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
