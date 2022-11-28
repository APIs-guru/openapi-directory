import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Customers {
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
   * chromemanagementCustomersAppsCountChromeAppRequests - Generate summary of app installation requests.
  **/
  chromemanagementCustomersAppsCountChromeAppRequests(
    req: operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/apps:countChromeAppRequests", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeAppRequestsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
  **/
  chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate(
    req: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
  **/
  chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention(
    req: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countChromeDevicesThatNeedAttention", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromemanagementCustomersReportsCountChromeHardwareFleetDevices - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
  **/
  chromemanagementCustomersReportsCountChromeHardwareFleetDevices(
    req: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countChromeHardwareFleetDevices", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeHardwareFleetDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromemanagementCustomersReportsCountChromeVersions - Generate report of installed Chrome versions.
  **/
  chromemanagementCustomersReportsCountChromeVersions(
    req: operations.ChromemanagementCustomersReportsCountChromeVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountChromeVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountChromeVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countChromeVersions", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersReportsCountChromeVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeVersionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromemanagementCustomersReportsCountInstalledApps - Generate report of app installations.
  **/
  chromemanagementCustomersReportsCountInstalledApps(
    req: operations.ChromemanagementCustomersReportsCountInstalledAppsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountInstalledAppsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountInstalledAppsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countInstalledApps", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersReportsCountInstalledAppsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountInstalledAppsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromemanagementCustomersReportsFindInstalledAppDevices - Generate report of devices that have a specified app installed.
  **/
  chromemanagementCustomersReportsFindInstalledAppDevices(
    req: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:findInstalledAppDevices", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1FindInstalledAppDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromemanagementCustomersTelemetryDevicesGet - Get telemetry device.
  **/
  chromemanagementCustomersTelemetryDevicesGet(
    req: operations.ChromemanagementCustomersTelemetryDevicesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersTelemetryDevicesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersTelemetryDevicesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersTelemetryDevicesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1TelemetryDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromemanagementCustomersTelemetryDevicesList - List all telemetry devices.
  **/
  chromemanagementCustomersTelemetryDevicesList(
    req: operations.ChromemanagementCustomersTelemetryDevicesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersTelemetryDevicesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersTelemetryDevicesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/telemetry/devices", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ChromemanagementCustomersTelemetryDevicesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1ListTelemetryDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
