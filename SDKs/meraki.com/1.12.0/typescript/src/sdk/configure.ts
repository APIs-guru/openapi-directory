import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Configure {
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
   * assignOrganizationLicensesSeats - Assign SM seats to a network
   *
   * Assign SM seats to a network. This will increase the managed SM device limit of the network
  **/
  assignOrganizationLicensesSeats(
    req: operations.AssignOrganizationLicensesSeatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssignOrganizationLicensesSeatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssignOrganizationLicensesSeatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/licenses/assignSeats", req.pathParams);

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
        const res: operations.AssignOrganizationLicensesSeatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.assignOrganizationLicensesSeats200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bindNetwork - Bind a network to a template.
   *
   * Bind a network to a template.
  **/
  bindNetwork(
    req: operations.BindNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BindNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BindNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/bind", req.pathParams);

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
        const res: operations.BindNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bindNetwork200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * checkinNetworkSmDevices - Force check-in a set of devices
   *
   * Force check-in a set of devices
  **/
  checkinNetworkSmDevices(
    req: operations.CheckinNetworkSmDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckinNetworkSmDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckinNetworkSmDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/checkin", req.pathParams);

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
        const res: operations.CheckinNetworkSmDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.checkinNetworkSmDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * claimIntoOrganization - Claim a list of devices, licenses, and/or orders into an organization
   *
   * Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
  **/
  claimIntoOrganization(
    req: operations.ClaimIntoOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClaimIntoOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClaimIntoOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/claim", req.pathParams);

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
        const res: operations.ClaimIntoOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.claimIntoOrganization200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * claimNetworkDevices - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
   *
   * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
  **/
  claimNetworkDevices(
    req: operations.ClaimNetworkDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClaimNetworkDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClaimNetworkDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/devices/claim", req.pathParams);

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
        const res: operations.ClaimNetworkDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloneOrganization - Create a new organization by cloning the addressed organization
   *
   * Create a new organization by cloning the addressed organization
  **/
  cloneOrganization(
    req: operations.CloneOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloneOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloneOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/clone", req.pathParams);

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
        const res: operations.CloneOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloneOrganization201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloneOrganizationSwitchDevices - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
   *
   * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
  **/
  cloneOrganizationSwitchDevices(
    req: operations.CloneOrganizationSwitchDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloneOrganizationSwitchDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloneOrganizationSwitchDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/switch/devices/clone", req.pathParams);

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
        const res: operations.CloneOrganizationSwitchDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloneOrganizationSwitchDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * combineOrganizationNetworks - Combine multiple networks into a single network
   *
   * Combine multiple networks into a single network
  **/
  combineOrganizationNetworks(
    req: operations.CombineOrganizationNetworksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CombineOrganizationNetworksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CombineOrganizationNetworksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/networks/combine", req.pathParams);

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
        const res: operations.CombineOrganizationNetworksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.combineOrganizationNetworks200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
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
   * createDeviceSwitchRoutingStaticRoute - Create a layer 3 static route for a switch
   *
   * Create a layer 3 static route for a switch
  **/
  createDeviceSwitchRoutingStaticRoute(
    req: operations.CreateDeviceSwitchRoutingStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeviceSwitchRoutingStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeviceSwitchRoutingStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/staticRoutes", req.pathParams);

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
        const res: operations.CreateDeviceSwitchRoutingStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createDeviceSwitchRoutingStaticRoute201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkApplianceStaticRoute - Add a static route for an MX or teleworker network
   *
   * Add a static route for an MX or teleworker network
  **/
  createNetworkApplianceStaticRoute(
    req: operations.CreateNetworkApplianceStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkApplianceStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkApplianceStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/staticRoutes", req.pathParams);

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
        const res: operations.CreateNetworkApplianceStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkApplianceStaticRoute201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkApplianceTrafficShapingCustomPerformanceClass - Add a custom performance class for an MX network
   *
   * Add a custom performance class for an MX network
  **/
  createNetworkApplianceTrafficShapingCustomPerformanceClass(
    req: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", req.pathParams);

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
        const res: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkApplianceVlan - Add a VLAN
   *
   * Add a VLAN
  **/
  createNetworkApplianceVlan(
    req: operations.CreateNetworkApplianceVlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkApplianceVlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkApplianceVlanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vlans", req.pathParams);

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
        const res: operations.CreateNetworkApplianceVlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkApplianceVlan201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkCameraQualityRetentionProfile - Creates new quality retention profile for this network.
   *
   * Creates new quality retention profile for this network.
  **/
  createNetworkCameraQualityRetentionProfile(
    req: operations.CreateNetworkCameraQualityRetentionProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkCameraQualityRetentionProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkCameraQualityRetentionProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles", req.pathParams);

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
        const res: operations.CreateNetworkCameraQualityRetentionProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkCameraQualityRetentionProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkCameraWirelessProfile - Creates a new camera wireless profile for this network.
   *
   * Creates a new camera wireless profile for this network.
  **/
  createNetworkCameraWirelessProfile(
    req: operations.CreateNetworkCameraWirelessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkCameraWirelessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkCameraWirelessProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles", req.pathParams);

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
        const res: operations.CreateNetworkCameraWirelessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkCameraWirelessProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkFirmwareUpgradesRollback - Rollback a Firmware Upgrade For A Network
   *
   * Rollback a Firmware Upgrade For A Network
  **/
  createNetworkFirmwareUpgradesRollback(
    req: operations.CreateNetworkFirmwareUpgradesRollbackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkFirmwareUpgradesRollbackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkFirmwareUpgradesRollbackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/firmwareUpgrades/rollbacks", req.pathParams);

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
        const res: operations.CreateNetworkFirmwareUpgradesRollbackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkFirmwareUpgradesRollback200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkFloorPlan - Upload a floor plan
   *
   * Upload a floor plan
  **/
  createNetworkFloorPlan(
    req: operations.CreateNetworkFloorPlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkFloorPlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkFloorPlanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/floorPlans", req.pathParams);

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
        const res: operations.CreateNetworkFloorPlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkFloorPlan201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkGroupPolicy - Create a group policy
   *
   * Create a group policy
  **/
  createNetworkGroupPolicy(
    req: operations.CreateNetworkGroupPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkGroupPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkGroupPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/groupPolicies", req.pathParams);

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
        const res: operations.CreateNetworkGroupPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkGroupPolicy201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkMerakiAuthUser - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
   *
   * Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
  **/
  createNetworkMerakiAuthUser(
    req: operations.CreateNetworkMerakiAuthUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkMerakiAuthUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkMerakiAuthUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/merakiAuthUsers", req.pathParams);

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
        const res: operations.CreateNetworkMerakiAuthUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkMerakiAuthUser201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkMqttBroker - Add an MQTT broker
   *
   * Add an MQTT broker
  **/
  createNetworkMqttBroker(
    req: operations.CreateNetworkMqttBrokerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkMqttBrokerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkMqttBrokerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/mqttBrokers", req.pathParams);

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
        const res: operations.CreateNetworkMqttBrokerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkMqttBroker201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkPiiRequest - Submit a new delete or restrict processing PII request
   *
   * Submit a new delete or restrict processing PII request
   * 
   * ## ALTERNATE PATH
   * 
   * ```
   * /organizations/{organizationId}/pii/requests
   * ```
  **/
  createNetworkPiiRequest(
    req: operations.CreateNetworkPiiRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkPiiRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkPiiRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/pii/requests", req.pathParams);

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
        const res: operations.CreateNetworkPiiRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkPiiRequest201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkSmBypassActivationLockAttempt - Bypass activation lock attempt
   *
   * Bypass activation lock attempt
  **/
  createNetworkSmBypassActivationLockAttempt(
    req: operations.CreateNetworkSmBypassActivationLockAttemptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSmBypassActivationLockAttemptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSmBypassActivationLockAttemptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/bypassActivationLockAttempts", req.pathParams);

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
        const res: operations.CreateNetworkSmBypassActivationLockAttemptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSmBypassActivationLockAttempt201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
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
   * createNetworkSwitchAccessPolicy - Create an access policy for a switch network
   *
   * Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
  **/
  createNetworkSwitchAccessPolicy(
    req: operations.CreateNetworkSwitchAccessPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSwitchAccessPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSwitchAccessPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/accessPolicies", req.pathParams);

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
        const res: operations.CreateNetworkSwitchAccessPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSwitchAccessPolicy201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkSwitchLinkAggregation - Create a link aggregation group
   *
   * Create a link aggregation group
  **/
  createNetworkSwitchLinkAggregation(
    req: operations.CreateNetworkSwitchLinkAggregationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSwitchLinkAggregationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSwitchLinkAggregationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/linkAggregations", req.pathParams);

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
        const res: operations.CreateNetworkSwitchLinkAggregationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSwitchLinkAggregation201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkSwitchPortSchedule - Add a switch port schedule
   *
   * Add a switch port schedule
  **/
  createNetworkSwitchPortSchedule(
    req: operations.CreateNetworkSwitchPortScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSwitchPortScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSwitchPortScheduleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/portSchedules", req.pathParams);

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
        const res: operations.CreateNetworkSwitchPortScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSwitchPortSchedule201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkSwitchQosRule - Add a quality of service rule
   *
   * Add a quality of service rule
  **/
  createNetworkSwitchQosRule(
    req: operations.CreateNetworkSwitchQosRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSwitchQosRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSwitchQosRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/qosRules", req.pathParams);

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
        const res: operations.CreateNetworkSwitchQosRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSwitchQosRule201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkSwitchRoutingMulticastRendezvousPoint - Create a multicast rendezvous point
   *
   * Create a multicast rendezvous point
  **/
  createNetworkSwitchRoutingMulticastRendezvousPoint(
    req: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", req.pathParams);

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
        const res: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJsonObject = httpRes?.data;
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
   * createNetworkWebhooksHttpServer - Add an HTTP server to a network
   *
   * Add an HTTP server to a network
  **/
  createNetworkWebhooksHttpServer(
    req: operations.CreateNetworkWebhooksHttpServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkWebhooksHttpServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkWebhooksHttpServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/webhooks/httpServers", req.pathParams);

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
        const res: operations.CreateNetworkWebhooksHttpServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkWebhooksHttpServer201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkWebhooksWebhookTest - Send a test webhook for a network
   *
   * Send a test webhook for a network
  **/
  createNetworkWebhooksWebhookTest(
    req: operations.CreateNetworkWebhooksWebhookTestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkWebhooksWebhookTestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkWebhooksWebhookTestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/webhooks/webhookTests", req.pathParams);

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
        const res: operations.CreateNetworkWebhooksWebhookTestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkWebhooksWebhookTest201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkWirelessRfProfile - Creates new RF profile for this network
   *
   * Creates new RF profile for this network
  **/
  createNetworkWirelessRfProfile(
    req: operations.CreateNetworkWirelessRfProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkWirelessRfProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkWirelessRfProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/rfProfiles", req.pathParams);

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
        const res: operations.CreateNetworkWirelessRfProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkWirelessRfProfile201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNetworkWirelessSsidIdentityPsk - Create an Identity PSK
   *
   * Create an Identity PSK
  **/
  createNetworkWirelessSsidIdentityPsk(
    req: operations.CreateNetworkWirelessSsidIdentityPskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkWirelessSsidIdentityPskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkWirelessSsidIdentityPskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", req.pathParams);

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
        const res: operations.CreateNetworkWirelessSsidIdentityPskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkWirelessSsidIdentityPsk201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganization - Create a new organization
   *
   * Create a new organization
  **/
  createOrganization(
    req: operations.CreateOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/organizations";

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
        const res: operations.CreateOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganization201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationActionBatch - Create an action batch
   *
   * Create an action batch
  **/
  createOrganizationActionBatch(
    req: operations.CreateOrganizationActionBatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationActionBatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationActionBatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/actionBatches", req.pathParams);

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
        const res: operations.CreateOrganizationActionBatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationActionBatch201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationAdaptivePolicyAcl - Creates new adaptive policy ACL
   *
   * Creates new adaptive policy ACL
  **/
  createOrganizationAdaptivePolicyAcl(
    req: operations.CreateOrganizationAdaptivePolicyAclRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationAdaptivePolicyAclResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationAdaptivePolicyAclRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/adaptivePolicy/acls", req.pathParams);

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
        const res: operations.CreateOrganizationAdaptivePolicyAclResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationAdaptivePolicyAcl200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationAdmin - Create a new dashboard administrator
   *
   * Create a new dashboard administrator
  **/
  createOrganizationAdmin(
    req: operations.CreateOrganizationAdminRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationAdminResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationAdminRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/admins", req.pathParams);

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
        const res: operations.CreateOrganizationAdminResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationAdmin201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationBrandingPolicy - Add a new branding policy to an organization
   *
   * Add a new branding policy to an organization
  **/
  createOrganizationBrandingPolicy(
    req: operations.CreateOrganizationBrandingPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationBrandingPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationBrandingPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/brandingPolicies", req.pathParams);

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
        const res: operations.CreateOrganizationBrandingPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationBrandingPolicy201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationConfigTemplate - Create a new configuration template
   *
   * Create a new configuration template
  **/
  createOrganizationConfigTemplate(
    req: operations.CreateOrganizationConfigTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationConfigTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationConfigTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates", req.pathParams);

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
        const res: operations.CreateOrganizationConfigTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationConfigTemplate201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationInsightMonitoredMediaServer - Add a media server to be monitored for this organization
   *
   * Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
  **/
  createOrganizationInsightMonitoredMediaServer(
    req: operations.CreateOrganizationInsightMonitoredMediaServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationInsightMonitoredMediaServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationInsightMonitoredMediaServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers", req.pathParams);

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
        const res: operations.CreateOrganizationInsightMonitoredMediaServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationInsightMonitoredMediaServer201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationNetwork - Create a network
   *
   * Create a network
  **/
  createOrganizationNetwork(
    req: operations.CreateOrganizationNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/networks", req.pathParams);

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
        const res: operations.CreateOrganizationNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationNetwork201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationSamlIdp - Create a SAML IdP for your organization.
   *
   * Create a SAML IdP for your organization.
  **/
  createOrganizationSamlIdp(
    req: operations.CreateOrganizationSamlIdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationSamlIdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationSamlIdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps", req.pathParams);

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
        const res: operations.CreateOrganizationSamlIdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationSamlIdp201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrganizationSamlRole - Create a SAML role
   *
   * Create a SAML role
  **/
  createOrganizationSamlRole(
    req: operations.CreateOrganizationSamlRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationSamlRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationSamlRoleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/samlRoles", req.pathParams);

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
        const res: operations.CreateOrganizationSamlRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationSamlRole201ApplicationJsonObject = httpRes?.data;
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
   * deleteDeviceSwitchRoutingStaticRoute - Delete a layer 3 static route for a switch
   *
   * Delete a layer 3 static route for a switch
  **/
  deleteDeviceSwitchRoutingStaticRoute(
    req: operations.DeleteDeviceSwitchRoutingStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeviceSwitchRoutingStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeviceSwitchRoutingStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDeviceSwitchRoutingStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetwork - Delete a network
   *
   * Delete a network
  **/
  deleteNetwork(
    req: operations.DeleteNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkApplianceStaticRoute - Delete a static route from an MX or teleworker network
   *
   * Delete a static route from an MX or teleworker network
  **/
  deleteNetworkApplianceStaticRoute(
    req: operations.DeleteNetworkApplianceStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkApplianceStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkApplianceStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkApplianceStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkApplianceTrafficShapingCustomPerformanceClass - Delete a custom performance class from an MX network
   *
   * Delete a custom performance class from an MX network
  **/
  deleteNetworkApplianceTrafficShapingCustomPerformanceClass(
    req: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkApplianceVlan - Delete a VLAN from a network
   *
   * Delete a VLAN from a network
  **/
  deleteNetworkApplianceVlan(
    req: operations.DeleteNetworkApplianceVlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkApplianceVlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkApplianceVlanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vlans/{vlanId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkApplianceVlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkCameraQualityRetentionProfile - Delete an existing quality retention profile for this network.
   *
   * Delete an existing quality retention profile for this network.
  **/
  deleteNetworkCameraQualityRetentionProfile(
    req: operations.DeleteNetworkCameraQualityRetentionProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkCameraQualityRetentionProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkCameraQualityRetentionProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkCameraQualityRetentionProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkCameraWirelessProfile - Delete an existing camera wireless profile for this network.
   *
   * Delete an existing camera wireless profile for this network.
  **/
  deleteNetworkCameraWirelessProfile(
    req: operations.DeleteNetworkCameraWirelessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkCameraWirelessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkCameraWirelessProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkCameraWirelessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkFloorPlan - Destroy a floor plan
   *
   * Destroy a floor plan
  **/
  deleteNetworkFloorPlan(
    req: operations.DeleteNetworkFloorPlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkFloorPlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkFloorPlanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/floorPlans/{floorPlanId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkFloorPlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkGroupPolicy - Delete a group policy
   *
   * Delete a group policy
  **/
  deleteNetworkGroupPolicy(
    req: operations.DeleteNetworkGroupPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkGroupPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkGroupPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/groupPolicies/{groupPolicyId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkGroupPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkMerakiAuthUser - Deauthorize a user
   *
   * Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)
  **/
  deleteNetworkMerakiAuthUser(
    req: operations.DeleteNetworkMerakiAuthUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkMerakiAuthUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkMerakiAuthUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkMerakiAuthUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkMqttBroker - Delete an MQTT broker
   *
   * Delete an MQTT broker
  **/
  deleteNetworkMqttBroker(
    req: operations.DeleteNetworkMqttBrokerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkMqttBrokerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkMqttBrokerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkMqttBrokerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkPiiRequest - Delete a restrict processing PII request
   *
   * Delete a restrict processing PII request
   * 
   * ## ALTERNATE PATH
   * 
   * ```
   * /organizations/{organizationId}/pii/requests/{requestId}
   * ```
  **/
  deleteNetworkPiiRequest(
    req: operations.DeleteNetworkPiiRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkPiiRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkPiiRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/pii/requests/{requestId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkPiiRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * deleteNetworkSmUserAccessDevice - Delete a User Access Device
   *
   * Delete a User Access Device
  **/
  deleteNetworkSmUserAccessDevice(
    req: operations.DeleteNetworkSmUserAccessDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSmUserAccessDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSmUserAccessDeviceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/userAccessDevices/{userAccessDeviceId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSmUserAccessDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSwitchAccessPolicy - Delete an access policy for a switch network
   *
   * Delete an access policy for a switch network
  **/
  deleteNetworkSwitchAccessPolicy(
    req: operations.DeleteNetworkSwitchAccessPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSwitchAccessPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSwitchAccessPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSwitchAccessPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSwitchLinkAggregation - Split a link aggregation group into separate ports
   *
   * Split a link aggregation group into separate ports
  **/
  deleteNetworkSwitchLinkAggregation(
    req: operations.DeleteNetworkSwitchLinkAggregationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSwitchLinkAggregationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSwitchLinkAggregationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSwitchLinkAggregationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSwitchPortSchedule - Delete a switch port schedule
   *
   * Delete a switch port schedule
  **/
  deleteNetworkSwitchPortSchedule(
    req: operations.DeleteNetworkSwitchPortScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSwitchPortScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSwitchPortScheduleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSwitchPortScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSwitchQosRule - Delete a quality of service rule
   *
   * Delete a quality of service rule
  **/
  deleteNetworkSwitchQosRule(
    req: operations.DeleteNetworkSwitchQosRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSwitchQosRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSwitchQosRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/qosRules/{qosRuleId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSwitchQosRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkSwitchRoutingMulticastRendezvousPoint - Delete a multicast rendezvous point
   *
   * Delete a multicast rendezvous point
  **/
  deleteNetworkSwitchRoutingMulticastRendezvousPoint(
    req: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * deleteNetworkWebhooksHttpServer - Delete an HTTP server from a network
   *
   * Delete an HTTP server from a network
  **/
  deleteNetworkWebhooksHttpServer(
    req: operations.DeleteNetworkWebhooksHttpServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkWebhooksHttpServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkWebhooksHttpServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkWebhooksHttpServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkWirelessRfProfile - Delete a RF Profile
   *
   * Delete a RF Profile
  **/
  deleteNetworkWirelessRfProfile(
    req: operations.DeleteNetworkWirelessRfProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkWirelessRfProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkWirelessRfProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkWirelessRfProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkWirelessSsidIdentityPsk - Delete an Identity PSK
   *
   * Delete an Identity PSK
  **/
  deleteNetworkWirelessSsidIdentityPsk(
    req: operations.DeleteNetworkWirelessSsidIdentityPskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkWirelessSsidIdentityPskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkWirelessSsidIdentityPskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkWirelessSsidIdentityPskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganization - Delete an organization
   *
   * Delete an organization
  **/
  deleteOrganization(
    req: operations.DeleteOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationActionBatch - Delete an action batch
   *
   * Delete an action batch
  **/
  deleteOrganizationActionBatch(
    req: operations.DeleteOrganizationActionBatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationActionBatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationActionBatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/actionBatches/{actionBatchId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationActionBatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationAdaptivePolicyAcl - Deletes the specified adaptive policy ACL
   *
   * Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
  **/
  deleteOrganizationAdaptivePolicyAcl(
    req: operations.DeleteOrganizationAdaptivePolicyAclRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationAdaptivePolicyAclResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationAdaptivePolicyAclRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationAdaptivePolicyAclResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationAdmin - Revoke all access for a dashboard administrator within this organization
   *
   * Revoke all access for a dashboard administrator within this organization
  **/
  deleteOrganizationAdmin(
    req: operations.DeleteOrganizationAdminRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationAdminResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationAdminRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/admins/{adminId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationAdminResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationBrandingPolicy - Delete a branding policy
   *
   * Delete a branding policy
  **/
  deleteOrganizationBrandingPolicy(
    req: operations.DeleteOrganizationBrandingPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationBrandingPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationBrandingPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationBrandingPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationConfigTemplate - Remove a configuration template
   *
   * Remove a configuration template
  **/
  deleteOrganizationConfigTemplate(
    req: operations.DeleteOrganizationConfigTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationConfigTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationConfigTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationConfigTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationInsightMonitoredMediaServer - Delete a monitored media server from this organization
   *
   * Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
  **/
  deleteOrganizationInsightMonitoredMediaServer(
    req: operations.DeleteOrganizationInsightMonitoredMediaServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationInsightMonitoredMediaServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationInsightMonitoredMediaServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationInsightMonitoredMediaServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationSamlIdp - Remove a SAML IdP in your organization.
   *
   * Remove a SAML IdP in your organization.
  **/
  deleteOrganizationSamlIdp(
    req: operations.DeleteOrganizationSamlIdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationSamlIdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationSamlIdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps/{idpId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationSamlIdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationSamlRole - Remove a SAML role
   *
   * Remove a SAML role
  **/
  deleteOrganizationSamlRole(
    req: operations.DeleteOrganizationSamlRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationSamlRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationSamlRoleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/samlRoles/{samlRoleId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationSamlRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDevice - Return a single device
   *
   * Return a single device
  **/
  getDevice(
    req: operations.GetDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDevice200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCameraQualityAndRetention - Returns quality and retention settings for the given camera
   *
   * Returns quality and retention settings for the given camera
  **/
  getDeviceCameraQualityAndRetention(
    req: operations.GetDeviceCameraQualityAndRetentionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCameraQualityAndRetentionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCameraQualityAndRetentionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/qualityAndRetention", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceCameraQualityAndRetentionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCameraQualityAndRetention200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCameraSense - Returns sense settings for a given camera
   *
   * Returns sense settings for a given camera
  **/
  getDeviceCameraSense(
    req: operations.GetDeviceCameraSenseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCameraSenseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCameraSenseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/sense", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceCameraSenseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCameraSense200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCameraSenseObjectDetectionModels - Returns the MV Sense object detection model list for the given camera
   *
   * Returns the MV Sense object detection model list for the given camera
  **/
  getDeviceCameraSenseObjectDetectionModels(
    req: operations.GetDeviceCameraSenseObjectDetectionModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCameraSenseObjectDetectionModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCameraSenseObjectDetectionModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/sense/objectDetectionModels", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceCameraSenseObjectDetectionModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCameraSenseObjectDetectionModels200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCameraVideoLink - Returns video link to the specified camera
   *
   * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
  **/
  getDeviceCameraVideoLink(
    req: operations.GetDeviceCameraVideoLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCameraVideoLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCameraVideoLinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/videoLink", req.pathParams);
    
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
        const res: operations.GetDeviceCameraVideoLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCameraVideoLink200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCameraVideoSettings - Returns video settings for the given camera
   *
   * Returns video settings for the given camera
  **/
  getDeviceCameraVideoSettings(
    req: operations.GetDeviceCameraVideoSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCameraVideoSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCameraVideoSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/video/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceCameraVideoSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCameraVideoSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCameraWirelessProfiles - Returns wireless profile assigned to the given camera
   *
   * Returns wireless profile assigned to the given camera
  **/
  getDeviceCameraWirelessProfiles(
    req: operations.GetDeviceCameraWirelessProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCameraWirelessProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCameraWirelessProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/wirelessProfiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceCameraWirelessProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCameraWirelessProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCellularGatewayLan - Show the LAN Settings of a MG
   *
   * Show the LAN Settings of a MG
  **/
  getDeviceCellularGatewayLan(
    req: operations.GetDeviceCellularGatewayLanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCellularGatewayLanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCellularGatewayLanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/cellularGateway/lan", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceCellularGatewayLanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCellularGatewayLan200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCellularGatewayPortForwardingRules - Returns the port forwarding rules for a single MG.
   *
   * Returns the port forwarding rules for a single MG.
  **/
  getDeviceCellularGatewayPortForwardingRules(
    req: operations.GetDeviceCellularGatewayPortForwardingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCellularGatewayPortForwardingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCellularGatewayPortForwardingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/cellularGateway/portForwardingRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceCellularGatewayPortForwardingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceManagementInterface - Return the management interface settings for a device
   *
   * Return the management interface settings for a device
  **/
  getDeviceManagementInterface(
    req: operations.GetDeviceManagementInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceManagementInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceManagementInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/managementInterface", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceManagementInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceManagementInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceSwitchPort - Return a switch port
   *
   * Return a switch port
  **/
  getDeviceSwitchPort(
    req: operations.GetDeviceSwitchPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceSwitchPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceSwitchPortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/ports/{portId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceSwitchPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceSwitchPort200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceSwitchPorts - List the switch ports for a switch
   *
   * List the switch ports for a switch
  **/
  getDeviceSwitchPorts(
    req: operations.GetDeviceSwitchPortsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceSwitchPortsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceSwitchPortsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/ports", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceSwitchPortsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceSwitchPorts200ApplicationJsonObject = httpRes?.data;
            }
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
   * getDeviceSwitchRoutingStaticRoute - Return a layer 3 static route for a switch
   *
   * Return a layer 3 static route for a switch
  **/
  getDeviceSwitchRoutingStaticRoute(
    req: operations.GetDeviceSwitchRoutingStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceSwitchRoutingStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceSwitchRoutingStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceSwitchRoutingStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceSwitchRoutingStaticRoute200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceSwitchRoutingStaticRoutes - List layer 3 static routes for a switch
   *
   * List layer 3 static routes for a switch
  **/
  getDeviceSwitchRoutingStaticRoutes(
    req: operations.GetDeviceSwitchRoutingStaticRoutesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceSwitchRoutingStaticRoutesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceSwitchRoutingStaticRoutesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/staticRoutes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceSwitchRoutingStaticRoutesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceSwitchRoutingStaticRoutes200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceSwitchWarmSpare - Return warm spare configuration for a switch
   *
   * Return warm spare configuration for a switch
  **/
  getDeviceSwitchWarmSpare(
    req: operations.GetDeviceSwitchWarmSpareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceSwitchWarmSpareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceSwitchWarmSpareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/warmSpare", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceSwitchWarmSpareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceSwitchWarmSpare200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceWirelessBluetoothSettings - Return the bluetooth settings for a wireless device
   *
   * Return the bluetooth settings for a wireless device
  **/
  getDeviceWirelessBluetoothSettings(
    req: operations.GetDeviceWirelessBluetoothSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceWirelessBluetoothSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceWirelessBluetoothSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/wireless/bluetooth/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceWirelessBluetoothSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceWirelessBluetoothSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceWirelessRadioSettings - Return the radio settings of a device
   *
   * Return the radio settings of a device
  **/
  getDeviceWirelessRadioSettings(
    req: operations.GetDeviceWirelessRadioSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceWirelessRadioSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceWirelessRadioSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/wireless/radio/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceWirelessRadioSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceWirelessRadioSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetwork - Return a network
   *
   * Return a network
  **/
  getNetwork(
    req: operations.GetNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetwork200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkAlertsSettings - Return the alert configuration for this network
   *
   * Return the alert configuration for this network
  **/
  getNetworkAlertsSettings(
    req: operations.GetNetworkAlertsSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkAlertsSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkAlertsSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/alerts/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkAlertsSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkAlertsSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MX network
   *
   * Return the connectivity testing destinations for an MX network
  **/
  getNetworkApplianceConnectivityMonitoringDestinations(
    req: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceContentFiltering - Return the content filtering settings for an MX network
   *
   * Return the content filtering settings for an MX network
  **/
  getNetworkApplianceContentFiltering(
    req: operations.GetNetworkApplianceContentFilteringRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceContentFilteringResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceContentFilteringRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/contentFiltering", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceContentFilteringResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceContentFiltering200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceContentFilteringCategories - List all available content filtering categories for an MX network
   *
   * List all available content filtering categories for an MX network
  **/
  getNetworkApplianceContentFilteringCategories(
    req: operations.GetNetworkApplianceContentFilteringCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceContentFilteringCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceContentFilteringCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/contentFiltering/categories", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceContentFilteringCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceContentFilteringCategories200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallCellularFirewallRules - Return the cellular firewall rules for an MX network
   *
   * Return the cellular firewall rules for an MX network
  **/
  getNetworkApplianceFirewallCellularFirewallRules(
    req: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/cellularFirewallRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallCellularFirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallFirewalledService - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
   *
   * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
  **/
  getNetworkApplianceFirewallFirewalledService(
    req: operations.GetNetworkApplianceFirewallFirewalledServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallFirewalledServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallFirewalledServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/firewalledServices/{service}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallFirewalledServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallFirewalledService200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallFirewalledServices - List the appliance services and their accessibility rules
   *
   * List the appliance services and their accessibility rules
  **/
  getNetworkApplianceFirewallFirewalledServices(
    req: operations.GetNetworkApplianceFirewallFirewalledServicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallFirewalledServicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallFirewalledServicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/firewalledServices", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallFirewalledServicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallFirewalledServices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallInboundFirewallRules - Return the inbound firewall rules for an MX network
   *
   * Return the inbound firewall rules for an MX network
  **/
  getNetworkApplianceFirewallInboundFirewallRules(
    req: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallL3FirewallRules - Return the L3 firewall rules for an MX network
   *
   * Return the L3 firewall rules for an MX network
  **/
  getNetworkApplianceFirewallL3FirewallRules(
    req: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallL3FirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallL3FirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/l3FirewallRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallL3FirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallL3FirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallL7FirewallRules - List the MX L7 firewall rules for an MX network
   *
   * List the MX L7 firewall rules for an MX network
  **/
  getNetworkApplianceFirewallL7FirewallRules(
    req: operations.GetNetworkApplianceFirewallL7FirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallL7FirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/l7FirewallRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallL7FirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallL7FirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallL7FirewallRulesApplicationCategories - Return the L7 firewall application categories and their associated applications for an MX network
   *
   * Return the L7 firewall application categories and their associated applications for an MX network
  **/
  getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(
    req: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallOneToManyNatRules - Return the 1:Many NAT mapping rules for an MX network
   *
   * Return the 1:Many NAT mapping rules for an MX network
  **/
  getNetworkApplianceFirewallOneToManyNatRules(
    req: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/oneToManyNatRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallOneToManyNatRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallOneToOneNatRules - Return the 1:1 NAT mapping rules for an MX network
   *
   * Return the 1:1 NAT mapping rules for an MX network
  **/
  getNetworkApplianceFirewallOneToOneNatRules(
    req: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/oneToOneNatRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallOneToOneNatRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceFirewallPortForwardingRules - Return the port forwarding rules for an MX network
   *
   * Return the port forwarding rules for an MX network
  **/
  getNetworkApplianceFirewallPortForwardingRules(
    req: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceFirewallPortForwardingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceFirewallPortForwardingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/portForwardingRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceFirewallPortForwardingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceFirewallPortForwardingRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkAppliancePort - Return per-port VLAN settings for a single MX port.
   *
   * Return per-port VLAN settings for a single MX port.
  **/
  getNetworkAppliancePort(
    req: operations.GetNetworkAppliancePortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkAppliancePortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkAppliancePortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/ports/{portId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkAppliancePortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkAppliancePort200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkAppliancePorts - List per-port VLAN settings for all ports of a MX.
   *
   * List per-port VLAN settings for all ports of a MX.
  **/
  getNetworkAppliancePorts(
    req: operations.GetNetworkAppliancePortsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkAppliancePortsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkAppliancePortsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/ports", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkAppliancePortsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkAppliancePorts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceSecurityIntrusion - Returns all supported intrusion settings for an MX network
   *
   * Returns all supported intrusion settings for an MX network
  **/
  getNetworkApplianceSecurityIntrusion(
    req: operations.GetNetworkApplianceSecurityIntrusionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceSecurityIntrusionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceSecurityIntrusionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/security/intrusion", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceSecurityIntrusionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceSecurityIntrusion200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceSecurityMalware - Returns all supported malware settings for an MX network
   *
   * Returns all supported malware settings for an MX network
  **/
  getNetworkApplianceSecurityMalware(
    req: operations.GetNetworkApplianceSecurityMalwareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceSecurityMalwareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceSecurityMalwareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/security/malware", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceSecurityMalwareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceSecurityMalware200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceSettings - Return the appliance settings for a network
   *
   * Return the appliance settings for a network
  **/
  getNetworkApplianceSettings(
    req: operations.GetNetworkApplianceSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceSingleLan - Return single LAN configuration
   *
   * Return single LAN configuration
  **/
  getNetworkApplianceSingleLan(
    req: operations.GetNetworkApplianceSingleLanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceSingleLanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceSingleLanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/singleLan", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceSingleLanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceSingleLan200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceStaticRoute - Return a static route for an MX or teleworker network
   *
   * Return a static route for an MX or teleworker network
  **/
  getNetworkApplianceStaticRoute(
    req: operations.GetNetworkApplianceStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceStaticRoute200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceStaticRoutes - List the static routes for an MX or teleworker network
   *
   * List the static routes for an MX or teleworker network
  **/
  getNetworkApplianceStaticRoutes(
    req: operations.GetNetworkApplianceStaticRoutesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceStaticRoutesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceStaticRoutesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/staticRoutes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceStaticRoutesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceStaticRoutes200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceTrafficShaping - Display the traffic shaping settings for an MX network
   *
   * Display the traffic shaping settings for an MX network
  **/
  getNetworkApplianceTrafficShaping(
    req: operations.GetNetworkApplianceTrafficShapingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceTrafficShapingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceTrafficShapingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceTrafficShapingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceTrafficShaping200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceTrafficShapingCustomPerformanceClass - Return a custom performance class for an MX network
   *
   * Return a custom performance class for an MX network
  **/
  getNetworkApplianceTrafficShapingCustomPerformanceClass(
    req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceTrafficShapingCustomPerformanceClasses - List all custom performance classes for an MX network
   *
   * List all custom performance classes for an MX network
  **/
  getNetworkApplianceTrafficShapingCustomPerformanceClasses(
    req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceTrafficShapingRules - Display the traffic shaping settings rules for an MX network
   *
   * Display the traffic shaping settings rules for an MX network
  **/
  getNetworkApplianceTrafficShapingRules(
    req: operations.GetNetworkApplianceTrafficShapingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceTrafficShapingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceTrafficShapingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/rules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceTrafficShapingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceTrafficShapingRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceTrafficShapingUplinkBandwidth - Returns the uplink bandwidth settings for your MX network.
   *
   * Returns the uplink bandwidth settings for your MX network.
  **/
  getNetworkApplianceTrafficShapingUplinkBandwidth(
    req: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceTrafficShapingUplinkSelection - Show uplink selection settings for an MX network
   *
   * Show uplink selection settings for an MX network
  **/
  getNetworkApplianceTrafficShapingUplinkSelection(
    req: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceVlan - Return a VLAN
   *
   * Return a VLAN
  **/
  getNetworkApplianceVlan(
    req: operations.GetNetworkApplianceVlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceVlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceVlanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vlans/{vlanId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceVlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceVlan200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceVlans - List the VLANs for an MX network
   *
   * List the VLANs for an MX network
  **/
  getNetworkApplianceVlans(
    req: operations.GetNetworkApplianceVlansRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceVlansResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceVlansRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vlans", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceVlansResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceVlans200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceVlansSettings - Returns the enabled status of VLANs for the network
   *
   * Returns the enabled status of VLANs for the network
  **/
  getNetworkApplianceVlansSettings(
    req: operations.GetNetworkApplianceVlansSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceVlansSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceVlansSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vlans/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceVlansSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceVlansSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceVpnBgp - Return a Hub BGP Configuration
   *
   * Return a Hub BGP Configuration
  **/
  getNetworkApplianceVpnBgp(
    req: operations.GetNetworkApplianceVpnBgpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceVpnBgpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceVpnBgpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vpn/bgp", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceVpnBgpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceVpnBgp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceVpnSiteToSiteVpn - Return the site-to-site VPN settings of a network
   *
   * Return the site-to-site VPN settings of a network. Only valid for MX networks.
  **/
  getNetworkApplianceVpnSiteToSiteVpn(
    req: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceVpnSiteToSiteVpnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceVpnSiteToSiteVpnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceVpnSiteToSiteVpnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceVpnSiteToSiteVpn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkApplianceWarmSpare - Return MX warm spare settings
   *
   * Return MX warm spare settings
  **/
  getNetworkApplianceWarmSpare(
    req: operations.GetNetworkApplianceWarmSpareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkApplianceWarmSpareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkApplianceWarmSpareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/warmSpare", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkApplianceWarmSpareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkApplianceWarmSpare200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCameraQualityRetentionProfile - Retrieve a single quality retention profile
   *
   * Retrieve a single quality retention profile
  **/
  getNetworkCameraQualityRetentionProfile(
    req: operations.GetNetworkCameraQualityRetentionProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCameraQualityRetentionProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCameraQualityRetentionProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCameraQualityRetentionProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCameraQualityRetentionProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCameraQualityRetentionProfiles - List the quality retention profiles for this network
   *
   * List the quality retention profiles for this network
  **/
  getNetworkCameraQualityRetentionProfiles(
    req: operations.GetNetworkCameraQualityRetentionProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCameraQualityRetentionProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCameraQualityRetentionProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCameraQualityRetentionProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCameraQualityRetentionProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCameraSchedules - Returns a list of all camera recording schedules.
   *
   * Returns a list of all camera recording schedules.
  **/
  getNetworkCameraSchedules(
    req: operations.GetNetworkCameraSchedulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCameraSchedulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCameraSchedulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/schedules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCameraSchedulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCameraSchedules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCameraWirelessProfile - Retrieve a single camera wireless profile.
   *
   * Retrieve a single camera wireless profile.
  **/
  getNetworkCameraWirelessProfile(
    req: operations.GetNetworkCameraWirelessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCameraWirelessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCameraWirelessProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCameraWirelessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCameraWirelessProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCameraWirelessProfiles - List the camera wireless profiles for this network.
   *
   * List the camera wireless profiles for this network.
  **/
  getNetworkCameraWirelessProfiles(
    req: operations.GetNetworkCameraWirelessProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCameraWirelessProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCameraWirelessProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCameraWirelessProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCameraWirelessProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCellularGatewayConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MG network
   *
   * Return the connectivity testing destinations for an MG network
  **/
  getNetworkCellularGatewayConnectivityMonitoringDestinations(
    req: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCellularGatewayDhcp - List common DHCP settings of MGs
   *
   * List common DHCP settings of MGs
  **/
  getNetworkCellularGatewayDhcp(
    req: operations.GetNetworkCellularGatewayDhcpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCellularGatewayDhcpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCellularGatewayDhcpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/cellularGateway/dhcp", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCellularGatewayDhcpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCellularGatewayDhcp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCellularGatewaySubnetPool - Return the subnet pool and mask configured for MGs in the network.
   *
   * Return the subnet pool and mask configured for MGs in the network.
  **/
  getNetworkCellularGatewaySubnetPool(
    req: operations.GetNetworkCellularGatewaySubnetPoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCellularGatewaySubnetPoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCellularGatewaySubnetPoolRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/cellularGateway/subnetPool", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCellularGatewaySubnetPoolResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCellularGatewaySubnetPool200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCellularGatewayUplink - Returns the uplink settings for your MG network.
   *
   * Returns the uplink settings for your MG network.
  **/
  getNetworkCellularGatewayUplink(
    req: operations.GetNetworkCellularGatewayUplinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCellularGatewayUplinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCellularGatewayUplinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/cellularGateway/uplink", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCellularGatewayUplinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCellularGatewayUplink200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkClientPolicy - Return the policy assigned to a client on the network
   *
   * Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
  **/
  getNetworkClientPolicy(
    req: operations.GetNetworkClientPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkClientPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkClientPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/clients/{clientId}/policy", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkClientPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkClientPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkClientSplashAuthorizationStatus - Return the splash authorization for a client, for each SSID they've associated with through splash
   *
   * Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
  **/
  getNetworkClientSplashAuthorizationStatus(
    req: operations.GetNetworkClientSplashAuthorizationStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkClientSplashAuthorizationStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkClientSplashAuthorizationStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkClientSplashAuthorizationStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkClientSplashAuthorizationStatus200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkDevices - List the devices in a network
   *
   * List the devices in a network
  **/
  getNetworkDevices(
    req: operations.GetNetworkDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/devices", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkFirmwareUpgrades - Get firmware upgrade information for a network
   *
   * Get firmware upgrade information for a network
  **/
  getNetworkFirmwareUpgrades(
    req: operations.GetNetworkFirmwareUpgradesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkFirmwareUpgradesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkFirmwareUpgradesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/firmwareUpgrades", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkFirmwareUpgradesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkFirmwareUpgrades200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkFloorPlan - Find a floor plan by ID
   *
   * Find a floor plan by ID
  **/
  getNetworkFloorPlan(
    req: operations.GetNetworkFloorPlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkFloorPlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkFloorPlanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/floorPlans/{floorPlanId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkFloorPlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkFloorPlan200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkFloorPlans - List the floor plans that belong to your network
   *
   * List the floor plans that belong to your network
  **/
  getNetworkFloorPlans(
    req: operations.GetNetworkFloorPlansRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkFloorPlansResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkFloorPlansRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/floorPlans", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkFloorPlansResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkFloorPlans200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkGroupPolicies - List the group policies in a network
   *
   * List the group policies in a network
  **/
  getNetworkGroupPolicies(
    req: operations.GetNetworkGroupPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkGroupPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkGroupPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/groupPolicies", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkGroupPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkGroupPolicies200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkGroupPolicy - Display a group policy
   *
   * Display a group policy
  **/
  getNetworkGroupPolicy(
    req: operations.GetNetworkGroupPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkGroupPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkGroupPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/groupPolicies/{groupPolicyId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkGroupPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkGroupPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkMerakiAuthUser - Return the Meraki Auth splash guest, RADIUS, or client VPN user
   *
   * Return the Meraki Auth splash guest, RADIUS, or client VPN user
  **/
  getNetworkMerakiAuthUser(
    req: operations.GetNetworkMerakiAuthUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkMerakiAuthUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkMerakiAuthUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkMerakiAuthUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkMerakiAuthUser200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkMerakiAuthUsers - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
   *
   * List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
  **/
  getNetworkMerakiAuthUsers(
    req: operations.GetNetworkMerakiAuthUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkMerakiAuthUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkMerakiAuthUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/merakiAuthUsers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkMerakiAuthUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkMerakiAuthUsers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkMqttBroker - Return an MQTT broker
   *
   * Return an MQTT broker
  **/
  getNetworkMqttBroker(
    req: operations.GetNetworkMqttBrokerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkMqttBrokerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkMqttBrokerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkMqttBrokerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkMqttBroker200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkMqttBrokers - List the MQTT brokers for this network
   *
   * List the MQTT brokers for this network
  **/
  getNetworkMqttBrokers(
    req: operations.GetNetworkMqttBrokersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkMqttBrokersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkMqttBrokersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/mqttBrokers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkMqttBrokersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkMqttBrokers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkNetflow - Return the NetFlow traffic reporting settings for a network
   *
   * Return the NetFlow traffic reporting settings for a network
  **/
  getNetworkNetflow(
    req: operations.GetNetworkNetflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkNetflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkNetflowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/netflow", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkNetflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkNetflow200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkPiiPiiKeys - List the keys required to access Personally Identifiable Information (PII) for a given identifier
   *
   * List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.
   * 
   * ## ALTERNATE PATH
   * 
   * ```
   * /organizations/{organizationId}/pii/piiKeys
   * ```
  **/
  getNetworkPiiPiiKeys(
    req: operations.GetNetworkPiiPiiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkPiiPiiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkPiiPiiKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/pii/piiKeys", req.pathParams);
    
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
        const res: operations.GetNetworkPiiPiiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkPiiPiiKeys200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkPiiRequest - Return a PII request
   *
   * Return a PII request
   * 
   * ## ALTERNATE PATH
   * 
   * ```
   * /organizations/{organizationId}/pii/requests/{requestId}
   * ```
  **/
  getNetworkPiiRequest(
    req: operations.GetNetworkPiiRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkPiiRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkPiiRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/pii/requests/{requestId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkPiiRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkPiiRequest200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkPiiRequests - List the PII requests for this network or organization
   *
   * List the PII requests for this network or organization
   * 
   * ## ALTERNATE PATH
   * 
   * ```
   * /organizations/{organizationId}/pii/requests
   * ```
  **/
  getNetworkPiiRequests(
    req: operations.GetNetworkPiiRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkPiiRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkPiiRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/pii/requests", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkPiiRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkPiiRequests200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkPiiSmDevicesForKey - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
   *
   * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
   * 
   * ## ALTERNATE PATH
   * 
   * ```
   * /organizations/{organizationId}/pii/smDevicesForKey
   * ```
  **/
  getNetworkPiiSmDevicesForKey(
    req: operations.GetNetworkPiiSmDevicesForKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkPiiSmDevicesForKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkPiiSmDevicesForKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/pii/smDevicesForKey", req.pathParams);
    
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
        const res: operations.GetNetworkPiiSmDevicesForKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkPiiSmDevicesForKey200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkPiiSmOwnersForKey - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
   *
   * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
   * 
   * ## ALTERNATE PATH
   * 
   * ```
   * /organizations/{organizationId}/pii/smOwnersForKey
   * ```
  **/
  getNetworkPiiSmOwnersForKey(
    req: operations.GetNetworkPiiSmOwnersForKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkPiiSmOwnersForKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkPiiSmOwnersForKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/pii/smOwnersForKey", req.pathParams);
    
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
        const res: operations.GetNetworkPiiSmOwnersForKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkPiiSmOwnersForKey200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSettings - Return the settings for a network
   *
   * Return the settings for a network
  **/
  getNetworkSettings(
    req: operations.GetNetworkSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmBypassActivationLockAttempt - Bypass activation lock attempt status
   *
   * Bypass activation lock attempt status
  **/
  getNetworkSmBypassActivationLockAttempt(
    req: operations.GetNetworkSmBypassActivationLockAttemptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmBypassActivationLockAttemptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmBypassActivationLockAttemptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmBypassActivationLockAttemptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmBypassActivationLockAttempt200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmDeviceCerts - List the certs on a device
   *
   * List the certs on a device
  **/
  getNetworkSmDeviceCerts(
    req: operations.GetNetworkSmDeviceCertsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmDeviceCertsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmDeviceCertsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/certs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmDeviceCertsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmDeviceCerts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmDeviceDeviceProfiles - Get the profiles associated with a device
   *
   * Get the profiles associated with a device
  **/
  getNetworkSmDeviceDeviceProfiles(
    req: operations.GetNetworkSmDeviceDeviceProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmDeviceDeviceProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmDeviceDeviceProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/deviceProfiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmDeviceDeviceProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmDeviceDeviceProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmDeviceNetworkAdapters - List the network adapters of a device
   *
   * List the network adapters of a device
  **/
  getNetworkSmDeviceNetworkAdapters(
    req: operations.GetNetworkSmDeviceNetworkAdaptersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmDeviceNetworkAdaptersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmDeviceNetworkAdaptersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/networkAdapters", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmDeviceNetworkAdaptersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmDeviceNetworkAdapters200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmDeviceRestrictions - List the restrictions on a device
   *
   * List the restrictions on a device
  **/
  getNetworkSmDeviceRestrictions(
    req: operations.GetNetworkSmDeviceRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmDeviceRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmDeviceRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/restrictions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmDeviceRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmDeviceRestrictions200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmDeviceSecurityCenters - List the security centers on a device
   *
   * List the security centers on a device
  **/
  getNetworkSmDeviceSecurityCenters(
    req: operations.GetNetworkSmDeviceSecurityCentersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmDeviceSecurityCentersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmDeviceSecurityCentersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/securityCenters", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmDeviceSecurityCentersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmDeviceSecurityCenters200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmDeviceSoftwares - Get a list of softwares associated with a device
   *
   * Get a list of softwares associated with a device
  **/
  getNetworkSmDeviceSoftwares(
    req: operations.GetNetworkSmDeviceSoftwaresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmDeviceSoftwaresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmDeviceSoftwaresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/softwares", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmDeviceSoftwaresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmDeviceSoftwares200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmDeviceWlanLists - List the saved SSID names on a device
   *
   * List the saved SSID names on a device
  **/
  getNetworkSmDeviceWlanLists(
    req: operations.GetNetworkSmDeviceWlanListsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmDeviceWlanListsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmDeviceWlanListsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/wlanLists", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmDeviceWlanListsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmDeviceWlanLists200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmDevices - List the devices enrolled in an SM network with various specified fields and filters
   *
   * List the devices enrolled in an SM network with various specified fields and filters
  **/
  getNetworkSmDevices(
    req: operations.GetNetworkSmDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices", req.pathParams);
    
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
        const res: operations.GetNetworkSmDevicesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmProfiles - List all profiles in a network
   *
   * List all profiles in a network
  **/
  getNetworkSmProfiles(
    req: operations.GetNetworkSmProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/profiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmProfiles200ApplicationJsonObject = httpRes?.data;
            }
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
   * getNetworkSmUserAccessDevices - List User Access Devices and its Trusted Access Connections
   *
   * List User Access Devices and its Trusted Access Connections
  **/
  getNetworkSmUserAccessDevices(
    req: operations.GetNetworkSmUserAccessDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmUserAccessDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmUserAccessDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/userAccessDevices", req.pathParams);
    
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
        const res: operations.GetNetworkSmUserAccessDevicesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmUserAccessDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmUserDeviceProfiles - Get the profiles associated with a user
   *
   * Get the profiles associated with a user
  **/
  getNetworkSmUserDeviceProfiles(
    req: operations.GetNetworkSmUserDeviceProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmUserDeviceProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmUserDeviceProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/users/{userId}/deviceProfiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmUserDeviceProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmUserDeviceProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmUserSoftwares - Get a list of softwares associated with a user
   *
   * Get a list of softwares associated with a user
  **/
  getNetworkSmUserSoftwares(
    req: operations.GetNetworkSmUserSoftwaresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmUserSoftwaresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmUserSoftwaresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/users/{userId}/softwares", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSmUserSoftwaresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmUserSoftwares200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSmUsers - List the owners in an SM network with various specified fields and filters
   *
   * List the owners in an SM network with various specified fields and filters
  **/
  getNetworkSmUsers(
    req: operations.GetNetworkSmUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSmUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSmUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/users", req.pathParams);
    
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
        const res: operations.GetNetworkSmUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSmUsers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSnmp - Return the SNMP settings for a network
   *
   * Return the SNMP settings for a network
  **/
  getNetworkSnmp(
    req: operations.GetNetworkSnmpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSnmpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSnmpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/snmp", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSnmpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSnmp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchAccessControlLists - Return the access control lists for a MS network
   *
   * Return the access control lists for a MS network
  **/
  getNetworkSwitchAccessControlLists(
    req: operations.GetNetworkSwitchAccessControlListsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchAccessControlListsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchAccessControlListsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/accessControlLists", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchAccessControlListsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchAccessControlLists200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchAccessPolicies - List the access policies for a switch network
   *
   * List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
  **/
  getNetworkSwitchAccessPolicies(
    req: operations.GetNetworkSwitchAccessPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchAccessPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchAccessPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/accessPolicies", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchAccessPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchAccessPolicies200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchAccessPolicy - Return a specific access policy for a switch network
   *
   * Return a specific access policy for a switch network
  **/
  getNetworkSwitchAccessPolicy(
    req: operations.GetNetworkSwitchAccessPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchAccessPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchAccessPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchAccessPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchAccessPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchAlternateManagementInterface - Return the switch alternate management interface for the network
   *
   * Return the switch alternate management interface for the network
  **/
  getNetworkSwitchAlternateManagementInterface(
    req: operations.GetNetworkSwitchAlternateManagementInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchAlternateManagementInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchAlternateManagementInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/alternateManagementInterface", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchAlternateManagementInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchAlternateManagementInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchDhcpServerPolicy - Return the DHCP server policy
   *
   * Return the DHCP server policy
  **/
  getNetworkSwitchDhcpServerPolicy(
    req: operations.GetNetworkSwitchDhcpServerPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchDhcpServerPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchDhcpServerPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/dhcpServerPolicy", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchDhcpServerPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchDhcpServerPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchDscpToCosMappings - Return the DSCP to CoS mappings
   *
   * Return the DSCP to CoS mappings
  **/
  getNetworkSwitchDscpToCosMappings(
    req: operations.GetNetworkSwitchDscpToCosMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchDscpToCosMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchDscpToCosMappingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/dscpToCosMappings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchDscpToCosMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchDscpToCosMappings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchLinkAggregations - List link aggregation groups
   *
   * List link aggregation groups
  **/
  getNetworkSwitchLinkAggregations(
    req: operations.GetNetworkSwitchLinkAggregationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchLinkAggregationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchLinkAggregationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/linkAggregations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchLinkAggregationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchLinkAggregations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchMtu - Return the MTU configuration
   *
   * Return the MTU configuration
  **/
  getNetworkSwitchMtu(
    req: operations.GetNetworkSwitchMtuRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchMtuResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchMtuRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/mtu", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchMtuResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchMtu200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchPortSchedules - List switch port schedules
   *
   * List switch port schedules
  **/
  getNetworkSwitchPortSchedules(
    req: operations.GetNetworkSwitchPortSchedulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchPortSchedulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchPortSchedulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/portSchedules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchPortSchedulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchPortSchedules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchQosRule - Return a quality of service rule
   *
   * Return a quality of service rule
  **/
  getNetworkSwitchQosRule(
    req: operations.GetNetworkSwitchQosRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchQosRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchQosRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/qosRules/{qosRuleId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchQosRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchQosRule200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchQosRules - List quality of service rules
   *
   * List quality of service rules
  **/
  getNetworkSwitchQosRules(
    req: operations.GetNetworkSwitchQosRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchQosRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchQosRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/qosRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchQosRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchQosRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchQosRulesOrder - Return the quality of service rule IDs by order in which they will be processed by the switch
   *
   * Return the quality of service rule IDs by order in which they will be processed by the switch
  **/
  getNetworkSwitchQosRulesOrder(
    req: operations.GetNetworkSwitchQosRulesOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchQosRulesOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchQosRulesOrderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/qosRules/order", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchQosRulesOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchQosRulesOrder200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchRoutingMulticast - Return multicast settings for a network
   *
   * Return multicast settings for a network
  **/
  getNetworkSwitchRoutingMulticast(
    req: operations.GetNetworkSwitchRoutingMulticastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchRoutingMulticastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchRoutingMulticastRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/multicast", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchRoutingMulticastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchRoutingMulticast200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchRoutingMulticastRendezvousPoint - Return a multicast rendezvous point
   *
   * Return a multicast rendezvous point
  **/
  getNetworkSwitchRoutingMulticastRendezvousPoint(
    req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchRoutingMulticastRendezvousPoints - List multicast rendezvous points
   *
   * List multicast rendezvous points
  **/
  getNetworkSwitchRoutingMulticastRendezvousPoints(
    req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchRoutingOspf - Return layer 3 OSPF routing configuration
   *
   * Return layer 3 OSPF routing configuration
  **/
  getNetworkSwitchRoutingOspf(
    req: operations.GetNetworkSwitchRoutingOspfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchRoutingOspfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchRoutingOspfRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/ospf", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchRoutingOspfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchRoutingOspf200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchSettings - Returns the switch network settings
   *
   * Returns the switch network settings
  **/
  getNetworkSwitchSettings(
    req: operations.GetNetworkSwitchSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchSettings200ApplicationJsonObject = httpRes?.data;
            }
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
   * getNetworkSwitchStormControl - Return the storm control configuration for a switch network
   *
   * Return the storm control configuration for a switch network
  **/
  getNetworkSwitchStormControl(
    req: operations.GetNetworkSwitchStormControlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStormControlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStormControlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stormControl", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStormControlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStormControl200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSwitchStp - Returns STP settings
   *
   * Returns STP settings
  **/
  getNetworkSwitchStp(
    req: operations.GetNetworkSwitchStpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSwitchStpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSwitchStpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stp", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSwitchStpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSwitchStp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkSyslogServers - List the syslog servers for a network
   *
   * List the syslog servers for a network
  **/
  getNetworkSyslogServers(
    req: operations.GetNetworkSyslogServersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSyslogServersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSyslogServersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/syslogServers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSyslogServersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkSyslogServers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkTrafficAnalysis - Return the traffic analysis settings for a network
   *
   * Return the traffic analysis settings for a network
  **/
  getNetworkTrafficAnalysis(
    req: operations.GetNetworkTrafficAnalysisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkTrafficAnalysisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkTrafficAnalysisRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/trafficAnalysis", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkTrafficAnalysisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkTrafficAnalysis200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkTrafficShapingApplicationCategories - Returns the application categories for traffic shaping rules.
   *
   * Returns the application categories for traffic shaping rules.
  **/
  getNetworkTrafficShapingApplicationCategories(
    req: operations.GetNetworkTrafficShapingApplicationCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkTrafficShapingApplicationCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkTrafficShapingApplicationCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/trafficShaping/applicationCategories", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkTrafficShapingApplicationCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkTrafficShapingApplicationCategories200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkTrafficShapingDscpTaggingOptions - Returns the available DSCP tagging options for your traffic shaping rules.
   *
   * Returns the available DSCP tagging options for your traffic shaping rules.
  **/
  getNetworkTrafficShapingDscpTaggingOptions(
    req: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/trafficShaping/dscpTaggingOptions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkTrafficShapingDscpTaggingOptions200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWebhooksHttpServer - Return an HTTP server for a network
   *
   * Return an HTTP server for a network
  **/
  getNetworkWebhooksHttpServer(
    req: operations.GetNetworkWebhooksHttpServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWebhooksHttpServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWebhooksHttpServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWebhooksHttpServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWebhooksHttpServer200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWebhooksHttpServers - List the HTTP servers for a network
   *
   * List the HTTP servers for a network
  **/
  getNetworkWebhooksHttpServers(
    req: operations.GetNetworkWebhooksHttpServersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWebhooksHttpServersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWebhooksHttpServersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/webhooks/httpServers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWebhooksHttpServersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWebhooksHttpServers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWebhooksWebhookTest - Return the status of a webhook test for a network
   *
   * Return the status of a webhook test for a network
  **/
  getNetworkWebhooksWebhookTest(
    req: operations.GetNetworkWebhooksWebhookTestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWebhooksWebhookTestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWebhooksWebhookTestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/webhooks/webhookTests/{webhookTestId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWebhooksWebhookTestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWebhooksWebhookTest200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessAlternateManagementInterface - Return alternate management interface and devices with IP assigned
   *
   * Return alternate management interface and devices with IP assigned
  **/
  getNetworkWirelessAlternateManagementInterface(
    req: operations.GetNetworkWirelessAlternateManagementInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessAlternateManagementInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessAlternateManagementInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/alternateManagementInterface", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessAlternateManagementInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessAlternateManagementInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessBilling - Return the billing settings of this network
   *
   * Return the billing settings of this network
  **/
  getNetworkWirelessBilling(
    req: operations.GetNetworkWirelessBillingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessBillingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessBillingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/billing", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessBillingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessBilling200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessBluetoothSettings - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
   *
   * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
  **/
  getNetworkWirelessBluetoothSettings(
    req: operations.GetNetworkWirelessBluetoothSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessBluetoothSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessBluetoothSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/bluetooth/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessBluetoothSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessBluetoothSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessRfProfile - Return a RF profile
   *
   * Return a RF profile
  **/
  getNetworkWirelessRfProfile(
    req: operations.GetNetworkWirelessRfProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessRfProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessRfProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessRfProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessRfProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessRfProfiles - List the non-basic RF profiles for this network
   *
   * List the non-basic RF profiles for this network
  **/
  getNetworkWirelessRfProfiles(
    req: operations.GetNetworkWirelessRfProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessRfProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessRfProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/rfProfiles", req.pathParams);
    
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
        const res: operations.GetNetworkWirelessRfProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessRfProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSettings - Return the wireless settings for a network
   *
   * Return the wireless settings for a network
  **/
  getNetworkWirelessSettings(
    req: operations.GetNetworkWirelessSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsid - Return a single MR SSID
   *
   * Return a single MR SSID
  **/
  getNetworkWirelessSsid(
    req: operations.GetNetworkWirelessSsidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsid200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidBonjourForwarding - List the Bonjour forwarding setting and rules for the SSID
   *
   * List the Bonjour forwarding setting and rules for the SSID
  **/
  getNetworkWirelessSsidBonjourForwarding(
    req: operations.GetNetworkWirelessSsidBonjourForwardingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidBonjourForwardingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidBonjourForwardingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidBonjourForwardingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidBonjourForwarding200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidDeviceTypeGroupPolicies - List the device type group policies for the SSID
   *
   * List the device type group policies for the SSID
  **/
  getNetworkWirelessSsidDeviceTypeGroupPolicies(
    req: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidEapOverride - Return the EAP overridden parameters for an SSID
   *
   * Return the EAP overridden parameters for an SSID
  **/
  getNetworkWirelessSsidEapOverride(
    req: operations.GetNetworkWirelessSsidEapOverrideRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidEapOverrideResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidEapOverrideRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidEapOverrideResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidEapOverride200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidFirewallL3FirewallRules - Return the L3 firewall rules for an SSID on an MR network
   *
   * Return the L3 firewall rules for an SSID on an MR network
  **/
  getNetworkWirelessSsidFirewallL3FirewallRules(
    req: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidFirewallL7FirewallRules - Return the L7 firewall rules for an SSID on an MR network
   *
   * Return the L7 firewall rules for an SSID on an MR network
  **/
  getNetworkWirelessSsidFirewallL7FirewallRules(
    req: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidHotspot20 - Return the Hotspot 2.0 settings for an SSID
   *
   * Return the Hotspot 2.0 settings for an SSID
  **/
  getNetworkWirelessSsidHotspot20(
    req: operations.GetNetworkWirelessSsidHotspot20Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidHotspot20Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidHotspot20Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidHotspot20Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidHotspot20200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidIdentityPsk - Return an Identity PSK
   *
   * Return an Identity PSK
  **/
  getNetworkWirelessSsidIdentityPsk(
    req: operations.GetNetworkWirelessSsidIdentityPskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidIdentityPskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidIdentityPskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidIdentityPskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidIdentityPsk200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidIdentityPsks - List all Identity PSKs in a wireless network
   *
   * List all Identity PSKs in a wireless network
  **/
  getNetworkWirelessSsidIdentityPsks(
    req: operations.GetNetworkWirelessSsidIdentityPsksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidIdentityPsksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidIdentityPsksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidIdentityPsksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidIdentityPsks200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidSchedules - List the outage schedule for the SSID
   *
   * List the outage schedule for the SSID
  **/
  getNetworkWirelessSsidSchedules(
    req: operations.GetNetworkWirelessSsidSchedulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidSchedulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidSchedulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/schedules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidSchedulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidSchedules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidSplashSettings - Display the splash page settings for the given SSID
   *
   * Display the splash page settings for the given SSID
  **/
  getNetworkWirelessSsidSplashSettings(
    req: operations.GetNetworkWirelessSsidSplashSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidSplashSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidSplashSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidSplashSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidTrafficShapingRules - Display the traffic shaping settings for a SSID on an MR network
   *
   * Display the traffic shaping settings for a SSID on an MR network
  **/
  getNetworkWirelessSsidTrafficShapingRules(
    req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidTrafficShapingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidTrafficShapingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidTrafficShapingRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsidVpn - List the VPN settings for the SSID.
   *
   * List the VPN settings for the SSID.
  **/
  getNetworkWirelessSsidVpn(
    req: operations.GetNetworkWirelessSsidVpnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidVpnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidVpnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/vpn", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidVpnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsidVpn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkWirelessSsids - List the MR SSIDs in a network
   *
   * List the MR SSIDs in a network
  **/
  getNetworkWirelessSsids(
    req: operations.GetNetworkWirelessSsidsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkWirelessSsidsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkWirelessSsidsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkWirelessSsidsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkWirelessSsids200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganization - Return an organization
   *
   * Return an organization
  **/
  getOrganization(
    req: operations.GetOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganization200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationActionBatch - Return an action batch
   *
   * Return an action batch
  **/
  getOrganizationActionBatch(
    req: operations.GetOrganizationActionBatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationActionBatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationActionBatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/actionBatches/{actionBatchId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationActionBatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationActionBatch200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationActionBatches - Return the list of action batches in the organization
   *
   * Return the list of action batches in the organization
  **/
  getOrganizationActionBatches(
    req: operations.GetOrganizationActionBatchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationActionBatchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationActionBatchesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/actionBatches", req.pathParams);
    
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
        const res: operations.GetOrganizationActionBatchesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationActionBatches200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationAdaptivePolicyAcl - Returns the adaptive policy ACL information
   *
   * Returns the adaptive policy ACL information
  **/
  getOrganizationAdaptivePolicyAcl(
    req: operations.GetOrganizationAdaptivePolicyAclRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationAdaptivePolicyAclResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationAdaptivePolicyAclRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationAdaptivePolicyAclResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationAdaptivePolicyAcl200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationAdaptivePolicyAcls - List adaptive policy ACLs in a organization
   *
   * List adaptive policy ACLs in a organization
  **/
  getOrganizationAdaptivePolicyAcls(
    req: operations.GetOrganizationAdaptivePolicyAclsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationAdaptivePolicyAclsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationAdaptivePolicyAclsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/adaptivePolicy/acls", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationAdaptivePolicyAclsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationAdaptivePolicyAcls200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationAdaptivePolicySettings - Returns global adaptive policy settings in an organization
   *
   * Returns global adaptive policy settings in an organization
  **/
  getOrganizationAdaptivePolicySettings(
    req: operations.GetOrganizationAdaptivePolicySettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationAdaptivePolicySettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationAdaptivePolicySettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/adaptivePolicy/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationAdaptivePolicySettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationAdaptivePolicySettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationAdmins - List the dashboard administrators in this organization
   *
   * List the dashboard administrators in this organization
  **/
  getOrganizationAdmins(
    req: operations.GetOrganizationAdminsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationAdminsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationAdminsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/admins", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationAdminsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationAdmins200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationApplianceSecurityIntrusion - Returns all supported intrusion settings for an organization
   *
   * Returns all supported intrusion settings for an organization
  **/
  getOrganizationApplianceSecurityIntrusion(
    req: operations.GetOrganizationApplianceSecurityIntrusionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationApplianceSecurityIntrusionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationApplianceSecurityIntrusionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/appliance/security/intrusion", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationApplianceSecurityIntrusionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationApplianceSecurityIntrusion200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationApplianceVpnThirdPartyVpnPeers - Return the third party VPN peers for an organization
   *
   * Return the third party VPN peers for an organization
  **/
  getOrganizationApplianceVpnThirdPartyVpnPeers(
    req: operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationApplianceVpnVpnFirewallRules - Return the firewall rules for an organization's site-to-site VPN
   *
   * Return the firewall rules for an organization's site-to-site VPN
  **/
  getOrganizationApplianceVpnVpnFirewallRules(
    req: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/appliance/vpn/vpnFirewallRules", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationApplianceVpnVpnFirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationBrandingPolicies - List the branding policies of an organization
   *
   * List the branding policies of an organization
  **/
  getOrganizationBrandingPolicies(
    req: operations.GetOrganizationBrandingPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationBrandingPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationBrandingPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/brandingPolicies", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationBrandingPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationBrandingPolicies200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationBrandingPoliciesPriorities - Return the branding policy IDs of an organization in priority order
   *
   * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
  **/
  getOrganizationBrandingPoliciesPriorities(
    req: operations.GetOrganizationBrandingPoliciesPrioritiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationBrandingPoliciesPrioritiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationBrandingPoliciesPrioritiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/brandingPolicies/priorities", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationBrandingPoliciesPrioritiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationBrandingPoliciesPriorities200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationBrandingPolicy - Return a branding policy
   *
   * Return a branding policy
  **/
  getOrganizationBrandingPolicy(
    req: operations.GetOrganizationBrandingPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationBrandingPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationBrandingPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationBrandingPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationBrandingPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationCameraOnboardingStatuses - Fetch onboarding status of cameras
   *
   * Fetch onboarding status of cameras
  **/
  getOrganizationCameraOnboardingStatuses(
    req: operations.GetOrganizationCameraOnboardingStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationCameraOnboardingStatusesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/camera/onboarding/statuses", req.pathParams);
    
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
        const res: operations.GetOrganizationCameraOnboardingStatusesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationCameraOnboardingStatuses200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationConfigTemplate - Return a single configuration template
   *
   * Return a single configuration template
  **/
  getOrganizationConfigTemplate(
    req: operations.GetOrganizationConfigTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationConfigTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationConfigTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationConfigTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationConfigTemplate200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationConfigTemplateSwitchProfilePort - Return a switch profile port
   *
   * Return a switch profile port
  **/
  getOrganizationConfigTemplateSwitchProfilePort(
    req: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationConfigTemplateSwitchProfilePortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationConfigTemplateSwitchProfilePortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationConfigTemplateSwitchProfilePorts - Return all the ports of a switch profile
   *
   * Return all the ports of a switch profile
  **/
  getOrganizationConfigTemplateSwitchProfilePorts(
    req: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationConfigTemplateSwitchProfiles - List the switch profiles for your switch template configuration
   *
   * List the switch profiles for your switch template configuration
  **/
  getOrganizationConfigTemplateSwitchProfiles(
    req: operations.GetOrganizationConfigTemplateSwitchProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationConfigTemplateSwitchProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationConfigTemplateSwitchProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationConfigTemplateSwitchProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationConfigTemplateSwitchProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationConfigTemplates - List the configuration templates for this organization
   *
   * List the configuration templates for this organization
  **/
  getOrganizationConfigTemplates(
    req: operations.GetOrganizationConfigTemplatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationConfigTemplatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationConfigTemplatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationConfigTemplatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationConfigTemplates200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationDevices - List the devices in an organization
   *
   * List the devices in an organization
  **/
  getOrganizationDevices(
    req: operations.GetOrganizationDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/devices", req.pathParams);
    
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
        const res: operations.GetOrganizationDevicesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationInsightApplications - List all Insight tracked applications
   *
   * List all Insight tracked applications
  **/
  getOrganizationInsightApplications(
    req: operations.GetOrganizationInsightApplicationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationInsightApplicationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationInsightApplicationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/insight/applications", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationInsightApplicationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationInsightApplications200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationInsightMonitoredMediaServer - Return a monitored media server for this organization
   *
   * Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
  **/
  getOrganizationInsightMonitoredMediaServer(
    req: operations.GetOrganizationInsightMonitoredMediaServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationInsightMonitoredMediaServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationInsightMonitoredMediaServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationInsightMonitoredMediaServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationInsightMonitoredMediaServer200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationInsightMonitoredMediaServers - List the monitored media servers for this organization
   *
   * List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
  **/
  getOrganizationInsightMonitoredMediaServers(
    req: operations.GetOrganizationInsightMonitoredMediaServersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationInsightMonitoredMediaServersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationInsightMonitoredMediaServersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationInsightMonitoredMediaServersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationInsightMonitoredMediaServers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationInventoryDevice - Return a single device from the inventory of an organization
   *
   * Return a single device from the inventory of an organization
  **/
  getOrganizationInventoryDevice(
    req: operations.GetOrganizationInventoryDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationInventoryDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationInventoryDeviceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/inventoryDevices/{serial}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationInventoryDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationInventoryDevice200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationInventoryDevices - Return the device inventory for an organization
   *
   * Return the device inventory for an organization
  **/
  getOrganizationInventoryDevices(
    req: operations.GetOrganizationInventoryDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationInventoryDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationInventoryDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/inventoryDevices", req.pathParams);
    
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
        const res: operations.GetOrganizationInventoryDevicesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationInventoryDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationLicense - Display a license
   *
   * Display a license
  **/
  getOrganizationLicense(
    req: operations.GetOrganizationLicenseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationLicenseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationLicenseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/licenses/{licenseId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationLicenseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationLicense200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationLicenses - List the licenses for an organization
   *
   * List the licenses for an organization
  **/
  getOrganizationLicenses(
    req: operations.GetOrganizationLicensesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationLicensesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationLicensesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/licenses", req.pathParams);
    
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
        const res: operations.GetOrganizationLicensesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationLicenses200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationLoginSecurity - Returns the login security settings for an organization.
   *
   * Returns the login security settings for an organization.
  **/
  getOrganizationLoginSecurity(
    req: operations.GetOrganizationLoginSecurityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationLoginSecurityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationLoginSecurityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/loginSecurity", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationLoginSecurityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationLoginSecurity200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationNetworks - List the networks that the user has privileges on in an organization
   *
   * List the networks that the user has privileges on in an organization
  **/
  getOrganizationNetworks(
    req: operations.GetOrganizationNetworksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationNetworksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationNetworksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/networks", req.pathParams);
    
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
        const res: operations.GetOrganizationNetworksResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationNetworks200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSaml - Returns the SAML SSO enabled settings for an organization.
   *
   * Returns the SAML SSO enabled settings for an organization.
  **/
  getOrganizationSaml(
    req: operations.GetOrganizationSamlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSamlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSamlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSamlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSaml200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSamlIdp - Get a SAML IdP from your organization.
   *
   * Get a SAML IdP from your organization.
  **/
  getOrganizationSamlIdp(
    req: operations.GetOrganizationSamlIdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSamlIdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSamlIdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps/{idpId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSamlIdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSamlIdp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSamlIdps - List the SAML IdPs in your organization.
   *
   * List the SAML IdPs in your organization.
  **/
  getOrganizationSamlIdps(
    req: operations.GetOrganizationSamlIdpsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSamlIdpsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSamlIdpsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSamlIdpsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSamlIdps200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSamlRole - Return a SAML role
   *
   * Return a SAML role
  **/
  getOrganizationSamlRole(
    req: operations.GetOrganizationSamlRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSamlRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSamlRoleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/samlRoles/{samlRoleId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSamlRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSamlRole200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSamlRoles - List the SAML roles for this organization
   *
   * List the SAML roles for this organization
  **/
  getOrganizationSamlRoles(
    req: operations.GetOrganizationSamlRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSamlRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSamlRolesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/samlRoles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSamlRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSamlRoles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSmApnsCert - Get the organization's APNS certificate
   *
   * Get the organization's APNS certificate
  **/
  getOrganizationSmApnsCert(
    req: operations.GetOrganizationSmApnsCertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSmApnsCertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSmApnsCertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/sm/apnsCert", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSmApnsCertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSmApnsCert200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSmVppAccount - Get a hash containing the unparsed token of the VPP account with the given ID
   *
   * Get a hash containing the unparsed token of the VPP account with the given ID
  **/
  getOrganizationSmVppAccount(
    req: operations.GetOrganizationSmVppAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSmVppAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSmVppAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/sm/vppAccounts/{vppAccountId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSmVppAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSmVppAccount200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSmVppAccounts - List the VPP accounts in the organization
   *
   * List the VPP accounts in the organization
  **/
  getOrganizationSmVppAccounts(
    req: operations.GetOrganizationSmVppAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSmVppAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSmVppAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/sm/vppAccounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSmVppAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSmVppAccounts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSnmp - Return the SNMP settings for an organization
   *
   * Return the SNMP settings for an organization
  **/
  getOrganizationSnmp(
    req: operations.GetOrganizationSnmpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSnmpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSnmpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/snmp", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSnmpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSnmp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizations - List the organizations that the user has privileges on
   *
   * List the organizations that the user has privileges on
  **/
  getOrganizations(
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/organizations";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * lockNetworkSmDevices - Lock a set of devices
   *
   * Lock a set of devices
  **/
  lockNetworkSmDevices(
    req: operations.LockNetworkSmDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LockNetworkSmDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LockNetworkSmDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/lock", req.pathParams);

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
        const res: operations.LockNetworkSmDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.lockNetworkSmDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * modifyNetworkSmDevicesTags - Add, delete, or update the tags of a set of devices
   *
   * Add, delete, or update the tags of a set of devices
  **/
  modifyNetworkSmDevicesTags(
    req: operations.ModifyNetworkSmDevicesTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyNetworkSmDevicesTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyNetworkSmDevicesTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/modifyTags", req.pathParams);

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
        const res: operations.ModifyNetworkSmDevicesTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.modifyNetworkSmDevicesTags200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * moveNetworkSmDevices - Move a set of devices to a new network
   *
   * Move a set of devices to a new network
  **/
  moveNetworkSmDevices(
    req: operations.MoveNetworkSmDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveNetworkSmDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveNetworkSmDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/move", req.pathParams);

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
        const res: operations.MoveNetworkSmDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.moveNetworkSmDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * moveOrganizationLicenses - Move licenses to another organization
   *
   * Move licenses to another organization. This will also move any devices that the licenses are assigned to
  **/
  moveOrganizationLicenses(
    req: operations.MoveOrganizationLicensesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveOrganizationLicensesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveOrganizationLicensesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/licenses/move", req.pathParams);

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
        const res: operations.MoveOrganizationLicensesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.moveOrganizationLicenses200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * moveOrganizationLicensesSeats - Move SM seats to another organization
   *
   * Move SM seats to another organization
  **/
  moveOrganizationLicensesSeats(
    req: operations.MoveOrganizationLicensesSeatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveOrganizationLicensesSeatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveOrganizationLicensesSeatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/licenses/moveSeats", req.pathParams);

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
        const res: operations.MoveOrganizationLicensesSeatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.moveOrganizationLicensesSeats200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * provisionNetworkClients - Provisions a client with a name and policy
   *
   * Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
  **/
  provisionNetworkClients(
    req: operations.ProvisionNetworkClientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProvisionNetworkClientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProvisionNetworkClientsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/clients/provision", req.pathParams);

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
        const res: operations.ProvisionNetworkClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionNetworkClients201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * refreshNetworkSmDeviceDetails - Refresh the details of a device
   *
   * Refresh the details of a device
  **/
  refreshNetworkSmDeviceDetails(
    req: operations.RefreshNetworkSmDeviceDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RefreshNetworkSmDeviceDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RefreshNetworkSmDeviceDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/refreshDetails", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RefreshNetworkSmDeviceDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeNetworkDevices - Remove a single device
   *
   * Remove a single device
  **/
  removeNetworkDevices(
    req: operations.RemoveNetworkDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveNetworkDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveNetworkDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/devices/remove", req.pathParams);

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
        const res: operations.RemoveNetworkDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * renewOrganizationLicensesSeats - Renew SM seats of a license
   *
   * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
  **/
  renewOrganizationLicensesSeats(
    req: operations.RenewOrganizationLicensesSeatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RenewOrganizationLicensesSeatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RenewOrganizationLicensesSeatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/licenses/renewSeats", req.pathParams);

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
        const res: operations.RenewOrganizationLicensesSeatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.renewOrganizationLicensesSeats200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * splitNetwork - Split a combined network into individual networks for each type of device
   *
   * Split a combined network into individual networks for each type of device
  **/
  splitNetwork(
    req: operations.SplitNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SplitNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SplitNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/split", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SplitNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.splitNetwork200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * swapNetworkApplianceWarmSpare - Swap MX primary and warm spare appliances
   *
   * Swap MX primary and warm spare appliances
  **/
  swapNetworkApplianceWarmSpare(
    req: operations.SwapNetworkApplianceWarmSpareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SwapNetworkApplianceWarmSpareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SwapNetworkApplianceWarmSpareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/warmSpare/swap", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SwapNetworkApplianceWarmSpareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.swapNetworkApplianceWarmSpare200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unbindNetwork - Unbind a network from a template.
   *
   * Unbind a network from a template.
  **/
  unbindNetwork(
    req: operations.UnbindNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnbindNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnbindNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/unbind", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnbindNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unbindNetwork200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unenrollNetworkSmDevice - Unenroll a device
   *
   * Unenroll a device
  **/
  unenrollNetworkSmDevice(
    req: operations.UnenrollNetworkSmDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnenrollNetworkSmDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnenrollNetworkSmDeviceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/{deviceId}/unenroll", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnenrollNetworkSmDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unenrollNetworkSmDevice200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDevice - Update the attributes of a device
   *
   * Update the attributes of a device
  **/
  updateDevice(
    req: operations.UpdateDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}", req.pathParams);

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
        const res: operations.UpdateDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDevice200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceCameraQualityAndRetention - Update quality and retention settings for the given camera
   *
   * Update quality and retention settings for the given camera
  **/
  updateDeviceCameraQualityAndRetention(
    req: operations.UpdateDeviceCameraQualityAndRetentionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceCameraQualityAndRetentionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceCameraQualityAndRetentionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/qualityAndRetention", req.pathParams);

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
        const res: operations.UpdateDeviceCameraQualityAndRetentionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceCameraQualityAndRetention200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceCameraSense - Update sense settings for the given camera
   *
   * Update sense settings for the given camera
  **/
  updateDeviceCameraSense(
    req: operations.UpdateDeviceCameraSenseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceCameraSenseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceCameraSenseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/sense", req.pathParams);

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
        const res: operations.UpdateDeviceCameraSenseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceCameraSense200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceCameraVideoSettings - Update video settings for the given camera
   *
   * Update video settings for the given camera
  **/
  updateDeviceCameraVideoSettings(
    req: operations.UpdateDeviceCameraVideoSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceCameraVideoSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceCameraVideoSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/video/settings", req.pathParams);

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
        const res: operations.UpdateDeviceCameraVideoSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceCameraVideoSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceCameraWirelessProfiles - Assign wireless profiles to the given camera
   *
   * Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
  **/
  updateDeviceCameraWirelessProfiles(
    req: operations.UpdateDeviceCameraWirelessProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceCameraWirelessProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceCameraWirelessProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/wirelessProfiles", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateDeviceCameraWirelessProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceCameraWirelessProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceCellularGatewayLan - Update the LAN Settings for a single MG.
   *
   * Update the LAN Settings for a single MG.
  **/
  updateDeviceCellularGatewayLan(
    req: operations.UpdateDeviceCellularGatewayLanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceCellularGatewayLanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceCellularGatewayLanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/cellularGateway/lan", req.pathParams);

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
        const res: operations.UpdateDeviceCellularGatewayLanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceCellularGatewayLan200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceCellularGatewayPortForwardingRules - Updates the port forwarding rules for a single MG.
   *
   * Updates the port forwarding rules for a single MG.
  **/
  updateDeviceCellularGatewayPortForwardingRules(
    req: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/cellularGateway/portForwardingRules", req.pathParams);

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
        const res: operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceManagementInterface - Update the management interface settings for a device
   *
   * Update the management interface settings for a device
  **/
  updateDeviceManagementInterface(
    req: operations.UpdateDeviceManagementInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceManagementInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceManagementInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/managementInterface", req.pathParams);

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
        const res: operations.UpdateDeviceManagementInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceManagementInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceSwitchPort - Update a switch port
   *
   * Update a switch port
  **/
  updateDeviceSwitchPort(
    req: operations.UpdateDeviceSwitchPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceSwitchPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceSwitchPortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/ports/{portId}", req.pathParams);

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
        const res: operations.UpdateDeviceSwitchPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceSwitchPort200ApplicationJsonObject = httpRes?.data;
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
   * updateDeviceSwitchRoutingStaticRoute - Update a layer 3 static route for a switch
   *
   * Update a layer 3 static route for a switch
  **/
  updateDeviceSwitchRoutingStaticRoute(
    req: operations.UpdateDeviceSwitchRoutingStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceSwitchRoutingStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceSwitchRoutingStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", req.pathParams);

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
        const res: operations.UpdateDeviceSwitchRoutingStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceSwitchRoutingStaticRoute200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceSwitchWarmSpare - Update warm spare configuration for a switch
   *
   * Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
  **/
  updateDeviceSwitchWarmSpare(
    req: operations.UpdateDeviceSwitchWarmSpareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceSwitchWarmSpareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceSwitchWarmSpareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/switch/warmSpare", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateDeviceSwitchWarmSpareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceSwitchWarmSpare200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceWirelessBluetoothSettings - Update the bluetooth settings for a wireless device
   *
   * Update the bluetooth settings for a wireless device
  **/
  updateDeviceWirelessBluetoothSettings(
    req: operations.UpdateDeviceWirelessBluetoothSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceWirelessBluetoothSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/wireless/bluetooth/settings", req.pathParams);

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
        const res: operations.UpdateDeviceWirelessBluetoothSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceWirelessBluetoothSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceWirelessRadioSettings - Update the radio settings of a device
   *
   * Update the radio settings of a device
  **/
  updateDeviceWirelessRadioSettings(
    req: operations.UpdateDeviceWirelessRadioSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceWirelessRadioSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceWirelessRadioSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/wireless/radio/settings", req.pathParams);

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
        const res: operations.UpdateDeviceWirelessRadioSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceWirelessRadioSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetwork - Update a network
   *
   * Update a network
  **/
  updateNetwork(
    req: operations.UpdateNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}", req.pathParams);

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
        const res: operations.UpdateNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetwork200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkAlertsSettings - Update the alert configuration for this network
   *
   * Update the alert configuration for this network
  **/
  updateNetworkAlertsSettings(
    req: operations.UpdateNetworkAlertsSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkAlertsSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkAlertsSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/alerts/settings", req.pathParams);

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
        const res: operations.UpdateNetworkAlertsSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkAlertsSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MX network
   *
   * Update the connectivity testing destinations for an MX network
  **/
  updateNetworkApplianceConnectivityMonitoringDestinations(
    req: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceContentFiltering - Update the content filtering settings for an MX network
   *
   * Update the content filtering settings for an MX network
  **/
  updateNetworkApplianceContentFiltering(
    req: operations.UpdateNetworkApplianceContentFilteringRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceContentFilteringResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceContentFilteringRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/contentFiltering", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceContentFilteringResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceContentFiltering200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceFirewallCellularFirewallRules - Update the cellular firewall rules of an MX network
   *
   * Update the cellular firewall rules of an MX network
  **/
  updateNetworkApplianceFirewallCellularFirewallRules(
    req: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/cellularFirewallRules", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceFirewallFirewalledService - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
   *
   * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
  **/
  updateNetworkApplianceFirewallFirewalledService(
    req: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/firewalledServices/{service}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceFirewallFirewalledService200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceFirewallInboundFirewallRules - Update the inbound firewall rules of an MX network
   *
   * Update the inbound firewall rules of an MX network
  **/
  updateNetworkApplianceFirewallInboundFirewallRules(
    req: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceFirewallL3FirewallRules - Update the L3 firewall rules of an MX network
   *
   * Update the L3 firewall rules of an MX network
  **/
  updateNetworkApplianceFirewallL3FirewallRules(
    req: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/l3FirewallRules", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceFirewallL3FirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceFirewallL7FirewallRules - Update the MX L7 firewall rules for an MX network
   *
   * Update the MX L7 firewall rules for an MX network
  **/
  updateNetworkApplianceFirewallL7FirewallRules(
    req: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/l7FirewallRules", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceFirewallL7FirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceFirewallOneToManyNatRules - Set the 1:Many NAT mapping rules for an MX network
   *
   * Set the 1:Many NAT mapping rules for an MX network
  **/
  updateNetworkApplianceFirewallOneToManyNatRules(
    req: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/oneToManyNatRules", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceFirewallOneToOneNatRules - Set the 1:1 NAT mapping rules for an MX network
   *
   * Set the 1:1 NAT mapping rules for an MX network
  **/
  updateNetworkApplianceFirewallOneToOneNatRules(
    req: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/oneToOneNatRules", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceFirewallPortForwardingRules - Update the port forwarding rules for an MX network
   *
   * Update the port forwarding rules for an MX network
  **/
  updateNetworkApplianceFirewallPortForwardingRules(
    req: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/firewall/portForwardingRules", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceFirewallPortForwardingRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkAppliancePort - Update the per-port VLAN settings for a single MX port.
   *
   * Update the per-port VLAN settings for a single MX port.
  **/
  updateNetworkAppliancePort(
    req: operations.UpdateNetworkAppliancePortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkAppliancePortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkAppliancePortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/ports/{portId}", req.pathParams);

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
        const res: operations.UpdateNetworkAppliancePortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkAppliancePort200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceSecurityIntrusion - Set the supported intrusion settings for an MX network
   *
   * Set the supported intrusion settings for an MX network
  **/
  updateNetworkApplianceSecurityIntrusion(
    req: operations.UpdateNetworkApplianceSecurityIntrusionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceSecurityIntrusionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceSecurityIntrusionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/security/intrusion", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceSecurityIntrusionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceSecurityIntrusion200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceSecurityMalware - Set the supported malware settings for an MX network
   *
   * Set the supported malware settings for an MX network
  **/
  updateNetworkApplianceSecurityMalware(
    req: operations.UpdateNetworkApplianceSecurityMalwareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceSecurityMalwareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceSecurityMalwareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/security/malware", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkApplianceSecurityMalwareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceSecurityMalware200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceSingleLan - Update single LAN configuration
   *
   * Update single LAN configuration
  **/
  updateNetworkApplianceSingleLan(
    req: operations.UpdateNetworkApplianceSingleLanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceSingleLanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceSingleLanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/singleLan", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceSingleLanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceSingleLan200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceStaticRoute - Update a static route for an MX or teleworker network
   *
   * Update a static route for an MX or teleworker network
  **/
  updateNetworkApplianceStaticRoute(
    req: operations.UpdateNetworkApplianceStaticRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceStaticRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceStaticRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceStaticRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceStaticRoute200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceTrafficShaping - Update the traffic shaping settings for an MX network
   *
   * Update the traffic shaping settings for an MX network
  **/
  updateNetworkApplianceTrafficShaping(
    req: operations.UpdateNetworkApplianceTrafficShapingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceTrafficShapingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceTrafficShapingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceTrafficShapingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceTrafficShaping200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceTrafficShapingCustomPerformanceClass - Update a custom performance class for an MX network
   *
   * Update a custom performance class for an MX network
  **/
  updateNetworkApplianceTrafficShapingCustomPerformanceClass(
    req: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceTrafficShapingRules - Update the traffic shaping settings rules for an MX network
   *
   * Update the traffic shaping settings rules for an MX network
  **/
  updateNetworkApplianceTrafficShapingRules(
    req: operations.UpdateNetworkApplianceTrafficShapingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceTrafficShapingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceTrafficShapingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/rules", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceTrafficShapingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceTrafficShapingRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceTrafficShapingUplinkBandwidth - Updates the uplink bandwidth settings for your MX network.
   *
   * Updates the uplink bandwidth settings for your MX network.
  **/
  updateNetworkApplianceTrafficShapingUplinkBandwidth(
    req: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceTrafficShapingUplinkSelection - Update uplink selection settings for an MX network
   *
   * Update uplink selection settings for an MX network
  **/
  updateNetworkApplianceTrafficShapingUplinkSelection(
    req: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceVlan - Update a VLAN
   *
   * Update a VLAN
  **/
  updateNetworkApplianceVlan(
    req: operations.UpdateNetworkApplianceVlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceVlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceVlanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vlans/{vlanId}", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceVlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceVlan200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceVlansSettings - Enable/Disable VLANs for the given network
   *
   * Enable/Disable VLANs for the given network
  **/
  updateNetworkApplianceVlansSettings(
    req: operations.UpdateNetworkApplianceVlansSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceVlansSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceVlansSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vlans/settings", req.pathParams);

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
        const res: operations.UpdateNetworkApplianceVlansSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceVlansSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceVpnBgp - Update a Hub BGP Configuration
   *
   * Update a Hub BGP Configuration
  **/
  updateNetworkApplianceVpnBgp(
    req: operations.UpdateNetworkApplianceVpnBgpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceVpnBgpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceVpnBgpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vpn/bgp", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkApplianceVpnBgpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceVpnBgp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceVpnSiteToSiteVpn - Update the site-to-site VPN settings of a network
   *
   * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
  **/
  updateNetworkApplianceVpnSiteToSiteVpn(
    req: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkApplianceWarmSpare - Update MX warm spare settings
   *
   * Update MX warm spare settings
  **/
  updateNetworkApplianceWarmSpare(
    req: operations.UpdateNetworkApplianceWarmSpareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkApplianceWarmSpareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkApplianceWarmSpareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/appliance/warmSpare", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkApplianceWarmSpareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkApplianceWarmSpare200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkCameraQualityRetentionProfile - Update an existing quality retention profile for this network.
   *
   * Update an existing quality retention profile for this network.
  **/
  updateNetworkCameraQualityRetentionProfile(
    req: operations.UpdateNetworkCameraQualityRetentionProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkCameraQualityRetentionProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkCameraQualityRetentionProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", req.pathParams);

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
        const res: operations.UpdateNetworkCameraQualityRetentionProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkCameraQualityRetentionProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkCameraWirelessProfile - Update an existing camera wireless profile in this network.
   *
   * Update an existing camera wireless profile in this network.
  **/
  updateNetworkCameraWirelessProfile(
    req: operations.UpdateNetworkCameraWirelessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkCameraWirelessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkCameraWirelessProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", req.pathParams);

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
        const res: operations.UpdateNetworkCameraWirelessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkCameraWirelessProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkCellularGatewayConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MG network
   *
   * Update the connectivity testing destinations for an MG network
  **/
  updateNetworkCellularGatewayConnectivityMonitoringDestinations(
    req: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", req.pathParams);

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
        const res: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkCellularGatewayDhcp - Update common DHCP settings of MGs
   *
   * Update common DHCP settings of MGs
  **/
  updateNetworkCellularGatewayDhcp(
    req: operations.UpdateNetworkCellularGatewayDhcpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkCellularGatewayDhcpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkCellularGatewayDhcpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/cellularGateway/dhcp", req.pathParams);

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
        const res: operations.UpdateNetworkCellularGatewayDhcpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkCellularGatewayDhcp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkCellularGatewaySubnetPool - Update the subnet pool and mask configuration for MGs in the network.
   *
   * Update the subnet pool and mask configuration for MGs in the network.
  **/
  updateNetworkCellularGatewaySubnetPool(
    req: operations.UpdateNetworkCellularGatewaySubnetPoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkCellularGatewaySubnetPoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkCellularGatewaySubnetPoolRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/cellularGateway/subnetPool", req.pathParams);

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
        const res: operations.UpdateNetworkCellularGatewaySubnetPoolResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkCellularGatewaySubnetPool200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkCellularGatewayUplink - Updates the uplink settings for your MG network.
   *
   * Updates the uplink settings for your MG network.
  **/
  updateNetworkCellularGatewayUplink(
    req: operations.UpdateNetworkCellularGatewayUplinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkCellularGatewayUplinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkCellularGatewayUplinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/cellularGateway/uplink", req.pathParams);

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
        const res: operations.UpdateNetworkCellularGatewayUplinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkCellularGatewayUplink200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkClientPolicy - Update the policy assigned to a client on the network
   *
   * Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
  **/
  updateNetworkClientPolicy(
    req: operations.UpdateNetworkClientPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkClientPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkClientPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/clients/{clientId}/policy", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkClientPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkClientPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkClientSplashAuthorizationStatus - Update a client's splash authorization
   *
   * Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
  **/
  updateNetworkClientSplashAuthorizationStatus(
    req: operations.UpdateNetworkClientSplashAuthorizationStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkClientSplashAuthorizationStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkClientSplashAuthorizationStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkClientSplashAuthorizationStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkClientSplashAuthorizationStatus200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkFirmwareUpgrades - Update firmware upgrade information for a network
   *
   * Update firmware upgrade information for a network
  **/
  updateNetworkFirmwareUpgrades(
    req: operations.UpdateNetworkFirmwareUpgradesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkFirmwareUpgradesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkFirmwareUpgradesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/firmwareUpgrades", req.pathParams);

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
        const res: operations.UpdateNetworkFirmwareUpgradesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkFirmwareUpgrades200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkFloorPlan - Update a floor plan's geolocation and other meta data
   *
   * Update a floor plan's geolocation and other meta data
  **/
  updateNetworkFloorPlan(
    req: operations.UpdateNetworkFloorPlanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkFloorPlanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkFloorPlanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/floorPlans/{floorPlanId}", req.pathParams);

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
        const res: operations.UpdateNetworkFloorPlanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkFloorPlan200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkGroupPolicy - Update a group policy
   *
   * Update a group policy
  **/
  updateNetworkGroupPolicy(
    req: operations.UpdateNetworkGroupPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkGroupPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkGroupPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/groupPolicies/{groupPolicyId}", req.pathParams);

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
        const res: operations.UpdateNetworkGroupPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkGroupPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkMerakiAuthUser - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
   *
   * Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
  **/
  updateNetworkMerakiAuthUser(
    req: operations.UpdateNetworkMerakiAuthUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkMerakiAuthUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkMerakiAuthUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", req.pathParams);

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
        const res: operations.UpdateNetworkMerakiAuthUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkMerakiAuthUser200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkMqttBroker - Update an MQTT broker
   *
   * Update an MQTT broker
  **/
  updateNetworkMqttBroker(
    req: operations.UpdateNetworkMqttBrokerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkMqttBrokerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkMqttBrokerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", req.pathParams);

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
        const res: operations.UpdateNetworkMqttBrokerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkMqttBroker200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkNetflow - Update the NetFlow traffic reporting settings for a network
   *
   * Update the NetFlow traffic reporting settings for a network
  **/
  updateNetworkNetflow(
    req: operations.UpdateNetworkNetflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkNetflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkNetflowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/netflow", req.pathParams);

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
        const res: operations.UpdateNetworkNetflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkNetflow200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSettings - Update the settings for a network
   *
   * Update the settings for a network
  **/
  updateNetworkSettings(
    req: operations.UpdateNetworkSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/settings", req.pathParams);

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
        const res: operations.UpdateNetworkSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSmDevicesFields - Modify the fields of a device
   *
   * Modify the fields of a device
  **/
  updateNetworkSmDevicesFields(
    req: operations.UpdateNetworkSmDevicesFieldsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSmDevicesFieldsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSmDevicesFieldsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/fields", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkSmDevicesFieldsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSmDevicesFields200ApplicationJsonObject = httpRes?.data;
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

  
  /**
   * updateNetworkSnmp - Update the SNMP settings for a network
   *
   * Update the SNMP settings for a network
  **/
  updateNetworkSnmp(
    req: operations.UpdateNetworkSnmpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSnmpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSnmpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/snmp", req.pathParams);

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
        const res: operations.UpdateNetworkSnmpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSnmp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchAccessControlLists - Update the access control lists for a MS network
   *
   * Update the access control lists for a MS network
  **/
  updateNetworkSwitchAccessControlLists(
    req: operations.UpdateNetworkSwitchAccessControlListsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchAccessControlListsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchAccessControlListsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/accessControlLists", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkSwitchAccessControlListsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchAccessControlLists200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchAccessPolicy - Update an access policy for a switch network
   *
   * Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
  **/
  updateNetworkSwitchAccessPolicy(
    req: operations.UpdateNetworkSwitchAccessPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchAccessPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchAccessPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchAccessPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchAccessPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchAlternateManagementInterface - Update the switch alternate management interface for the network
   *
   * Update the switch alternate management interface for the network
  **/
  updateNetworkSwitchAlternateManagementInterface(
    req: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/alternateManagementInterface", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchAlternateManagementInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchDhcpServerPolicy - Update the DHCP server policy
   *
   * Update the DHCP server policy
  **/
  updateNetworkSwitchDhcpServerPolicy(
    req: operations.UpdateNetworkSwitchDhcpServerPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchDhcpServerPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/dhcpServerPolicy", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchDhcpServerPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchDhcpServerPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchDscpToCosMappings - Update the DSCP to CoS mappings
   *
   * Update the DSCP to CoS mappings
  **/
  updateNetworkSwitchDscpToCosMappings(
    req: operations.UpdateNetworkSwitchDscpToCosMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchDscpToCosMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchDscpToCosMappingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/dscpToCosMappings", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkSwitchDscpToCosMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchDscpToCosMappings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchLinkAggregation - Update a link aggregation group
   *
   * Update a link aggregation group
  **/
  updateNetworkSwitchLinkAggregation(
    req: operations.UpdateNetworkSwitchLinkAggregationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchLinkAggregationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchLinkAggregationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchLinkAggregationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchLinkAggregation200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchMtu - Update the MTU configuration
   *
   * Update the MTU configuration
  **/
  updateNetworkSwitchMtu(
    req: operations.UpdateNetworkSwitchMtuRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchMtuResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchMtuRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/mtu", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchMtuResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchMtu200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchPortSchedule - Update a switch port schedule
   *
   * Update a switch port schedule
  **/
  updateNetworkSwitchPortSchedule(
    req: operations.UpdateNetworkSwitchPortScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchPortScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchPortScheduleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchPortScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchPortSchedule200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchQosRule - Update a quality of service rule
   *
   * Update a quality of service rule
  **/
  updateNetworkSwitchQosRule(
    req: operations.UpdateNetworkSwitchQosRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchQosRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchQosRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/qosRules/{qosRuleId}", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchQosRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchQosRule200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchQosRulesOrder - Update the order in which the rules should be processed by the switch
   *
   * Update the order in which the rules should be processed by the switch
  **/
  updateNetworkSwitchQosRulesOrder(
    req: operations.UpdateNetworkSwitchQosRulesOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchQosRulesOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchQosRulesOrderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/qosRules/order", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkSwitchQosRulesOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchQosRulesOrder200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchRoutingMulticast - Update multicast settings for a network
   *
   * Update multicast settings for a network
  **/
  updateNetworkSwitchRoutingMulticast(
    req: operations.UpdateNetworkSwitchRoutingMulticastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchRoutingMulticastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchRoutingMulticastRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/multicast", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchRoutingMulticastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchRoutingMulticast200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchRoutingMulticastRendezvousPoint - Update a multicast rendezvous point
   *
   * Update a multicast rendezvous point
  **/
  updateNetworkSwitchRoutingMulticastRendezvousPoint(
    req: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchRoutingOspf - Update layer 3 OSPF routing configuration
   *
   * Update layer 3 OSPF routing configuration
  **/
  updateNetworkSwitchRoutingOspf(
    req: operations.UpdateNetworkSwitchRoutingOspfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchRoutingOspfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchRoutingOspfRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/routing/ospf", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchRoutingOspfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchRoutingOspf200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchSettings - Update switch network settings
   *
   * Update switch network settings
  **/
  updateNetworkSwitchSettings(
    req: operations.UpdateNetworkSwitchSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/settings", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchSettings200ApplicationJsonObject = httpRes?.data;
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

  
  /**
   * updateNetworkSwitchStormControl - Update the storm control configuration for a switch network
   *
   * Update the storm control configuration for a switch network
  **/
  updateNetworkSwitchStormControl(
    req: operations.UpdateNetworkSwitchStormControlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchStormControlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchStormControlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stormControl", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchStormControlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchStormControl200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSwitchStp - Updates STP settings
   *
   * Updates STP settings
  **/
  updateNetworkSwitchStp(
    req: operations.UpdateNetworkSwitchStpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSwitchStpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSwitchStpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/switch/stp", req.pathParams);

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
        const res: operations.UpdateNetworkSwitchStpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSwitchStp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkSyslogServers - Update the syslog servers for a network
   *
   * Update the syslog servers for a network
  **/
  updateNetworkSyslogServers(
    req: operations.UpdateNetworkSyslogServersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkSyslogServersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkSyslogServersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/syslogServers", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNetworkSyslogServersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkSyslogServers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkTrafficAnalysis - Update the traffic analysis settings for a network
   *
   * Update the traffic analysis settings for a network
  **/
  updateNetworkTrafficAnalysis(
    req: operations.UpdateNetworkTrafficAnalysisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkTrafficAnalysisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkTrafficAnalysisRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/trafficAnalysis", req.pathParams);

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
        const res: operations.UpdateNetworkTrafficAnalysisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkTrafficAnalysis200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWebhooksHttpServer - Update an HTTP server
   *
   * Update an HTTP server
  **/
  updateNetworkWebhooksHttpServer(
    req: operations.UpdateNetworkWebhooksHttpServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWebhooksHttpServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWebhooksHttpServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", req.pathParams);

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
        const res: operations.UpdateNetworkWebhooksHttpServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWebhooksHttpServer200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessAlternateManagementInterface - Update alternate management interface and device static IP
   *
   * Update alternate management interface and device static IP
  **/
  updateNetworkWirelessAlternateManagementInterface(
    req: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/alternateManagementInterface", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessAlternateManagementInterface200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessBilling - Update the billing settings
   *
   * Update the billing settings
  **/
  updateNetworkWirelessBilling(
    req: operations.UpdateNetworkWirelessBillingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessBillingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessBillingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/billing", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessBillingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessBilling200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessBluetoothSettings - Update the Bluetooth settings for a network
   *
   * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
  **/
  updateNetworkWirelessBluetoothSettings(
    req: operations.UpdateNetworkWirelessBluetoothSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessBluetoothSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessBluetoothSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/bluetooth/settings", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessBluetoothSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessBluetoothSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessRfProfile - Updates specified RF profile for this network
   *
   * Updates specified RF profile for this network
  **/
  updateNetworkWirelessRfProfile(
    req: operations.UpdateNetworkWirelessRfProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessRfProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessRfProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessRfProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessRfProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSettings - Update the wireless settings for a network
   *
   * Update the wireless settings for a network
  **/
  updateNetworkWirelessSettings(
    req: operations.UpdateNetworkWirelessSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/settings", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsid - Update the attributes of an MR SSID
   *
   * Update the attributes of an MR SSID
  **/
  updateNetworkWirelessSsid(
    req: operations.UpdateNetworkWirelessSsidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsid200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidBonjourForwarding - Update the bonjour forwarding setting and rules for the SSID
   *
   * Update the bonjour forwarding setting and rules for the SSID
  **/
  updateNetworkWirelessSsidBonjourForwarding(
    req: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidBonjourForwardingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidBonjourForwardingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidBonjourForwardingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidBonjourForwarding200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidDeviceTypeGroupPolicies - Update the device type group policies for the SSID
   *
   * Update the device type group policies for the SSID
  **/
  updateNetworkWirelessSsidDeviceTypeGroupPolicies(
    req: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidEapOverride - Update the EAP overridden parameters for an SSID.
   *
   * Update the EAP overridden parameters for an SSID.
  **/
  updateNetworkWirelessSsidEapOverride(
    req: operations.UpdateNetworkWirelessSsidEapOverrideRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidEapOverrideResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidEapOverrideRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidEapOverrideResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidEapOverride200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidFirewallL3FirewallRules - Update the L3 firewall rules of an SSID on an MR network
   *
   * Update the L3 firewall rules of an SSID on an MR network
  **/
  updateNetworkWirelessSsidFirewallL3FirewallRules(
    req: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidFirewallL7FirewallRules - Update the L7 firewall rules of an SSID on an MR network
   *
   * Update the L7 firewall rules of an SSID on an MR network
  **/
  updateNetworkWirelessSsidFirewallL7FirewallRules(
    req: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidHotspot20 - Update the Hotspot 2.0 settings of an SSID
   *
   * Update the Hotspot 2.0 settings of an SSID
  **/
  updateNetworkWirelessSsidHotspot20(
    req: operations.UpdateNetworkWirelessSsidHotspot20Request,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidHotspot20Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidHotspot20Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidHotspot20Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidHotspot20200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidIdentityPsk - Update an Identity PSK
   *
   * Update an Identity PSK
  **/
  updateNetworkWirelessSsidIdentityPsk(
    req: operations.UpdateNetworkWirelessSsidIdentityPskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidIdentityPskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidIdentityPskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidIdentityPskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidIdentityPsk200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidSchedules - Update the outage schedule for the SSID
   *
   * Update the outage schedule for the SSID
  **/
  updateNetworkWirelessSsidSchedules(
    req: operations.UpdateNetworkWirelessSsidSchedulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidSchedulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidSchedulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/schedules", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidSchedulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidSchedules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidSplashSettings - Modify the splash page settings for the given SSID
   *
   * Modify the splash page settings for the given SSID
  **/
  updateNetworkWirelessSsidSplashSettings(
    req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidSplashSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidSplashSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidSplashSettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidTrafficShapingRules - Update the traffic shaping settings for an SSID on an MR network
   *
   * Update the traffic shaping settings for an SSID on an MR network
  **/
  updateNetworkWirelessSsidTrafficShapingRules(
    req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidTrafficShapingRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkWirelessSsidVpn - Update the VPN settings for the SSID
   *
   * Update the VPN settings for the SSID
  **/
  updateNetworkWirelessSsidVpn(
    req: operations.UpdateNetworkWirelessSsidVpnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkWirelessSsidVpnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkWirelessSsidVpnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/wireless/ssids/{number}/vpn", req.pathParams);

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
        const res: operations.UpdateNetworkWirelessSsidVpnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkWirelessSsidVpn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganization - Update an organization
   *
   * Update an organization
  **/
  updateOrganization(
    req: operations.UpdateOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}", req.pathParams);

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
        const res: operations.UpdateOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganization200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationActionBatch - Update an action batch
   *
   * Update an action batch
  **/
  updateOrganizationActionBatch(
    req: operations.UpdateOrganizationActionBatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationActionBatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationActionBatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/actionBatches/{actionBatchId}", req.pathParams);

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
        const res: operations.UpdateOrganizationActionBatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationActionBatch200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationAdaptivePolicyAcl - Updates an adaptive policy ACL
   *
   * Updates an adaptive policy ACL
  **/
  updateOrganizationAdaptivePolicyAcl(
    req: operations.UpdateOrganizationAdaptivePolicyAclRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationAdaptivePolicyAclResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationAdaptivePolicyAclRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", req.pathParams);

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
        const res: operations.UpdateOrganizationAdaptivePolicyAclResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationAdaptivePolicyAcl200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationAdaptivePolicySettings - Update global adaptive policy settings
   *
   * Update global adaptive policy settings
  **/
  updateOrganizationAdaptivePolicySettings(
    req: operations.UpdateOrganizationAdaptivePolicySettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationAdaptivePolicySettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationAdaptivePolicySettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/adaptivePolicy/settings", req.pathParams);

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
        const res: operations.UpdateOrganizationAdaptivePolicySettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationAdaptivePolicySettings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationAdmin - Update an administrator
   *
   * Update an administrator
  **/
  updateOrganizationAdmin(
    req: operations.UpdateOrganizationAdminRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationAdminResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationAdminRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/admins/{adminId}", req.pathParams);

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
        const res: operations.UpdateOrganizationAdminResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationAdmin200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationApplianceSecurityIntrusion - Sets supported intrusion settings for an organization
   *
   * Sets supported intrusion settings for an organization
  **/
  updateOrganizationApplianceSecurityIntrusion(
    req: operations.UpdateOrganizationApplianceSecurityIntrusionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationApplianceSecurityIntrusionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationApplianceSecurityIntrusionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/appliance/security/intrusion", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateOrganizationApplianceSecurityIntrusionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationApplianceSecurityIntrusion200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationApplianceVpnThirdPartyVpnPeers - Update the third party VPN peers for an organization
   *
   * Update the third party VPN peers for an organization
  **/
  updateOrganizationApplianceVpnThirdPartyVpnPeers(
    req: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationApplianceVpnVpnFirewallRules - Update the firewall rules of an organization's site-to-site VPN
   *
   * Update the firewall rules of an organization's site-to-site VPN
  **/
  updateOrganizationApplianceVpnVpnFirewallRules(
    req: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/appliance/vpn/vpnFirewallRules", req.pathParams);

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
        const res: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationBrandingPoliciesPriorities - Update the priority ordering of an organization's branding policies.
   *
   * Update the priority ordering of an organization's branding policies.
  **/
  updateOrganizationBrandingPoliciesPriorities(
    req: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/brandingPolicies/priorities", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationBrandingPoliciesPriorities200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationBrandingPolicy - Update a branding policy
   *
   * Update a branding policy
  **/
  updateOrganizationBrandingPolicy(
    req: operations.UpdateOrganizationBrandingPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationBrandingPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationBrandingPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", req.pathParams);

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
        const res: operations.UpdateOrganizationBrandingPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationBrandingPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationCameraOnboardingStatuses - Notify that credential handoff to camera has completed
   *
   * Notify that credential handoff to camera has completed
  **/
  updateOrganizationCameraOnboardingStatuses(
    req: operations.UpdateOrganizationCameraOnboardingStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationCameraOnboardingStatusesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/camera/onboarding/statuses", req.pathParams);

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
        const res: operations.UpdateOrganizationCameraOnboardingStatusesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationCameraOnboardingStatuses200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationConfigTemplate - Update a configuration template
   *
   * Update a configuration template
  **/
  updateOrganizationConfigTemplate(
    req: operations.UpdateOrganizationConfigTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationConfigTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationConfigTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}", req.pathParams);

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
        const res: operations.UpdateOrganizationConfigTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationConfigTemplate200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationConfigTemplateSwitchProfilePort - Update a switch profile port
   *
   * Update a switch profile port
  **/
  updateOrganizationConfigTemplateSwitchProfilePort(
    req: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", req.pathParams);

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
        const res: operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationInsightMonitoredMediaServer - Update a monitored media server for this organization
   *
   * Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
  **/
  updateOrganizationInsightMonitoredMediaServer(
    req: operations.UpdateOrganizationInsightMonitoredMediaServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationInsightMonitoredMediaServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationInsightMonitoredMediaServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", req.pathParams);

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
        const res: operations.UpdateOrganizationInsightMonitoredMediaServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationInsightMonitoredMediaServer200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationLicense - Update a license
   *
   * Update a license
  **/
  updateOrganizationLicense(
    req: operations.UpdateOrganizationLicenseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationLicenseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationLicenseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/licenses/{licenseId}", req.pathParams);

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
        const res: operations.UpdateOrganizationLicenseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationLicense200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationLoginSecurity - Update the login security settings for an organization
   *
   * Update the login security settings for an organization
  **/
  updateOrganizationLoginSecurity(
    req: operations.UpdateOrganizationLoginSecurityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationLoginSecurityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationLoginSecurityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/loginSecurity", req.pathParams);

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
        const res: operations.UpdateOrganizationLoginSecurityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationLoginSecurity200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationSaml - Updates the SAML SSO enabled settings for an organization.
   *
   * Updates the SAML SSO enabled settings for an organization.
  **/
  updateOrganizationSaml(
    req: operations.UpdateOrganizationSamlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationSamlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationSamlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml", req.pathParams);

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
        const res: operations.UpdateOrganizationSamlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationSaml200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationSamlIdp - Update a SAML IdP in your organization
   *
   * Update a SAML IdP in your organization
  **/
  updateOrganizationSamlIdp(
    req: operations.UpdateOrganizationSamlIdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationSamlIdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationSamlIdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps/{idpId}", req.pathParams);

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
        const res: operations.UpdateOrganizationSamlIdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationSamlIdp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationSamlRole - Update a SAML role
   *
   * Update a SAML role
  **/
  updateOrganizationSamlRole(
    req: operations.UpdateOrganizationSamlRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationSamlRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationSamlRoleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/samlRoles/{samlRoleId}", req.pathParams);

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
        const res: operations.UpdateOrganizationSamlRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationSamlRole200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationSnmp - Update the SNMP settings for an organization
   *
   * Update the SNMP settings for an organization
  **/
  updateOrganizationSnmp(
    req: operations.UpdateOrganizationSnmpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationSnmpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationSnmpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/snmp", req.pathParams);

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
        const res: operations.UpdateOrganizationSnmpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationSnmp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * wipeNetworkSmDevices - Wipe a device
   *
   * Wipe a device
  **/
  wipeNetworkSmDevices(
    req: operations.WipeNetworkSmDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WipeNetworkSmDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WipeNetworkSmDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/sm/devices/wipe", req.pathParams);

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
        const res: operations.WipeNetworkSmDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wipeNetworkSmDevices200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
