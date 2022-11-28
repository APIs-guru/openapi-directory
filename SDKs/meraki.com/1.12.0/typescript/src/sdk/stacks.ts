import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Stacks {
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
   * addNetworkSwitchStack - Add a switch to a stack
   *
   * Add a switch to a stack
  **/
  addNetworkSwitchStack(
    req: operations.AddNetworkSwitchStackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddNetworkSwitchStackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddNetworkSwitchStackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/add", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddNetworkSwitchStackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addNetworkSwitchStack200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkSwitchStack - Create a stack
   *
   * Create a stack
  **/
  createNetworkSwitchStack(
    req: operations.CreateNetworkSwitchStackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSwitchStackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSwitchStackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateNetworkSwitchStackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSwitchStack201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkSwitchStackRoutingInterface - Create a layer 3 interface for a switch stack
   *
   * Create a layer 3 interface for a switch stack
  **/
  createNetworkSwitchStackRoutingInterface(
    req: operations.CreateNetworkSwitchStackRoutingInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSwitchStackRoutingInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSwitchStackRoutingInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateNetworkSwitchStackRoutingInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSwitchStackRoutingInterface201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkSwitchStackRoutingStaticRoute - Create a layer 3 static route for a switch stack
   *
   * Create a layer 3 static route for a switch stack
  **/
  createNetworkSwitchStackRoutingStaticRoute(
    req: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSwitchStackRoutingStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSwitchStackRoutingStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateNetworkSwitchStackRoutingStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSwitchStackRoutingStaticRoute201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSwitchStack - Delete a stack
   *
   * Delete a stack
  **/
  deleteNetworkSwitchStack(
    req: operations.DeleteNetworkSwitchStackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSwitchStackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSwitchStackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSwitchStackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSwitchStackRoutingInterface - Delete a layer 3 interface from a switch stack
   *
   * Delete a layer 3 interface from a switch stack
  **/
  deleteNetworkSwitchStackRoutingInterface(
    req: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSwitchStackRoutingInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSwitchStackRoutingInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSwitchStackRoutingInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSwitchStackRoutingStaticRoute - Delete a layer 3 static route for a switch stack
   *
   * Delete a layer 3 static route for a switch stack
  **/
  deleteNetworkSwitchStackRoutingStaticRoute(
    req: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchStack - Show a switch stack
   *
   * Show a switch stack
  **/
  getNetworkSwitchStack(
    req: operations.GetNetworkSwitchStackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStack200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchStackRoutingInterface - Return a layer 3 interface from a switch stack
   *
   * Return a layer 3 interface from a switch stack
  **/
  getNetworkSwitchStackRoutingInterface(
    req: operations.GetNetworkSwitchStackRoutingInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStackRoutingInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStackRoutingInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStackRoutingInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStackRoutingInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchStackRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch stack
   *
   * Return a layer 3 interface DHCP configuration for a switch stack
  **/
  getNetworkSwitchStackRoutingInterfaceDhcp(
    req: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchStackRoutingInterfaces - List layer 3 interfaces for a switch stack
   *
   * List layer 3 interfaces for a switch stack
  **/
  getNetworkSwitchStackRoutingInterfaces(
    req: operations.GetNetworkSwitchStackRoutingInterfacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStackRoutingInterfacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStackRoutingInterfacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStackRoutingInterfacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStackRoutingInterfaces200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchStackRoutingStaticRoute - Return a layer 3 static route for a switch stack
   *
   * Return a layer 3 static route for a switch stack
  **/
  getNetworkSwitchStackRoutingStaticRoute(
    req: operations.GetNetworkSwitchStackRoutingStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStackRoutingStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStackRoutingStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStackRoutingStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStackRoutingStaticRoute200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchStackRoutingStaticRoutes - List layer 3 static routes for a switch stack
   *
   * List layer 3 static routes for a switch stack
  **/
  getNetworkSwitchStackRoutingStaticRoutes(
    req: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStackRoutingStaticRoutesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStackRoutingStaticRoutesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStackRoutingStaticRoutesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStackRoutingStaticRoutes200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchStacks - List the switch stacks in a network
   *
   * List the switch stacks in a network
  **/
  getNetworkSwitchStacks(
    req: operations.GetNetworkSwitchStacksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStacksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStacksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStacksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStacks200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeNetworkSwitchStack - Remove a switch from a stack
   *
   * Remove a switch from a stack
  **/
  removeNetworkSwitchStack(
    req: operations.RemoveNetworkSwitchStackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveNetworkSwitchStackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveNetworkSwitchStackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/remove", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.RemoveNetworkSwitchStackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.removeNetworkSwitchStack200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchStackRoutingInterface - Update a layer 3 interface for a switch stack
   *
   * Update a layer 3 interface for a switch stack
  **/
  updateNetworkSwitchStackRoutingInterface(
    req: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchStackRoutingInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchStackRoutingInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchStackRoutingInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchStackRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch stack
   *
   * Update a layer 3 interface DHCP configuration for a switch stack
  **/
  updateNetworkSwitchStackRoutingInterfaceDhcp(
    req: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchStackRoutingStaticRoute - Update a layer 3 static route for a switch stack
   *
   * Update a layer 3 static route for a switch stack
  **/
  updateNetworkSwitchStackRoutingStaticRoute(
    req: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchStackRoutingStaticRoute200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
