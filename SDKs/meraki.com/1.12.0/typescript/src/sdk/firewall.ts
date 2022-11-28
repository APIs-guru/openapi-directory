import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Firewall {
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

}
