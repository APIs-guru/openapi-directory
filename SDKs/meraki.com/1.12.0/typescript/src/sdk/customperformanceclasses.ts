import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CustomPerformanceClasses {
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

}
