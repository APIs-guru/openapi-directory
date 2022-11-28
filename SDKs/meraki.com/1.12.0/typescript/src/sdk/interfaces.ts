import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Interfaces {
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
   * createDeviceSwitchRoutingInterface - Create a layer 3 interface for a switch
   *
   * Create a layer 3 interface for a switch
  **/
  createDeviceSwitchRoutingInterface(
    req: operations.CreateDeviceSwitchRoutingInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeviceSwitchRoutingInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeviceSwitchRoutingInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/interfaces", req.pathParams);

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
        const res: operations.CreateDeviceSwitchRoutingInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createDeviceSwitchRoutingInterface201ApplicationJsonObject = httpRes?.data;
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
   * deleteDeviceSwitchRoutingInterface - Delete a layer 3 interface from the switch
   *
   * Delete a layer 3 interface from the switch
  **/
  deleteDeviceSwitchRoutingInterface(
    req: operations.DeleteDeviceSwitchRoutingInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeviceSwitchRoutingInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeviceSwitchRoutingInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDeviceSwitchRoutingInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getDeviceSwitchRoutingInterface - Return a layer 3 interface for a switch
   *
   * Return a layer 3 interface for a switch
  **/
  getDeviceSwitchRoutingInterface(
    req: operations.GetDeviceSwitchRoutingInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceSwitchRoutingInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceSwitchRoutingInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceSwitchRoutingInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceSwitchRoutingInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceSwitchRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch
   *
   * Return a layer 3 interface DHCP configuration for a switch
  **/
  getDeviceSwitchRoutingInterfaceDhcp(
    req: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceSwitchRoutingInterfaceDhcpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceSwitchRoutingInterfaceDhcpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceSwitchRoutingInterfaceDhcpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceSwitchRoutingInterfaceDhcp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceSwitchRoutingInterfaces - List layer 3 interfaces for a switch
   *
   * List layer 3 interfaces for a switch
  **/
  getDeviceSwitchRoutingInterfaces(
    req: operations.GetDeviceSwitchRoutingInterfacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceSwitchRoutingInterfacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceSwitchRoutingInterfacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/interfaces", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceSwitchRoutingInterfacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceSwitchRoutingInterfaces200ApplicationJsonObject = httpRes?.data;
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
   * updateDeviceSwitchRoutingInterface - Update a layer 3 interface for a switch
   *
   * Update a layer 3 interface for a switch
  **/
  updateDeviceSwitchRoutingInterface(
    req: operations.UpdateDeviceSwitchRoutingInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceSwitchRoutingInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceSwitchRoutingInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", req.pathParams);

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
        const res: operations.UpdateDeviceSwitchRoutingInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceSwitchRoutingInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceSwitchRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch
   *
   * Update a layer 3 interface DHCP configuration for a switch
  **/
  updateDeviceSwitchRoutingInterfaceDhcp(
    req: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", req.pathParams);

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
        const res: operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJsonObject = httpRes?.data;
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

}
