import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Intrusion {
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

}
