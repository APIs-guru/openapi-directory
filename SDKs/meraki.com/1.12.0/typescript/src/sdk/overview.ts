import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Overview {
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
   * getDeviceCameraAnalyticsOverview - Returns an overview of aggregate analytics data for a timespan
   *
   * Returns an overview of aggregate analytics data for a timespan
  **/
  getDeviceCameraAnalyticsOverview(
    req: operations.GetDeviceCameraAnalyticsOverviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCameraAnalyticsOverviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/analytics/overview", req.pathParams);
    
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
        const res: operations.GetDeviceCameraAnalyticsOverviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCameraAnalyticsOverview200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkClientsOverview - Return overview statistics for network clients
   *
   * Return overview statistics for network clients
  **/
  getNetworkClientsOverview(
    req: operations.GetNetworkClientsOverviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkClientsOverviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkClientsOverviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/clients/overview", req.pathParams);
    
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
        const res: operations.GetNetworkClientsOverviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkClientsOverview200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationApiRequestsOverview - Return an aggregated overview of API requests data
   *
   * Return an aggregated overview of API requests data
  **/
  getOrganizationApiRequestsOverview(
    req: operations.GetOrganizationApiRequestsOverviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationApiRequestsOverviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationApiRequestsOverviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/apiRequests/overview", req.pathParams);
    
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
        const res: operations.GetOrganizationApiRequestsOverviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationApiRequestsOverview200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationLicensesOverview - Return an overview of the license state for an organization
   *
   * Return an overview of the license state for an organization
  **/
  getOrganizationLicensesOverview(
    req: operations.GetOrganizationLicensesOverviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationLicensesOverviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationLicensesOverviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/licenses/overview", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationLicensesOverviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationLicensesOverview200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
