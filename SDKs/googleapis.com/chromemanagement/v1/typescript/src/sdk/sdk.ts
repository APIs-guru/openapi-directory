import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://chromemanagement.googleapis.com/",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

// SDK Documentation: http://developers.google.com/chrome/management/
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // ChromemanagementCustomersAppsCountChromeAppRequests - Generate summary of app installation requests.
  ChromemanagementCustomersAppsCountChromeAppRequests(
    req: operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/apps:countChromeAppRequests", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeAppRequestsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
  ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate(
    req: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
  ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention(
    req: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countChromeDevicesThatNeedAttention", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ChromemanagementCustomersReportsCountChromeHardwareFleetDevices - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
  ChromemanagementCustomersReportsCountChromeHardwareFleetDevices(
    req: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countChromeHardwareFleetDevices", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeHardwareFleetDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ChromemanagementCustomersReportsCountChromeVersions - Generate report of installed Chrome versions.
  ChromemanagementCustomersReportsCountChromeVersions(
    req: operations.ChromemanagementCustomersReportsCountChromeVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountChromeVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountChromeVersionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countChromeVersions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersReportsCountChromeVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountChromeVersionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ChromemanagementCustomersReportsCountInstalledApps - Generate report of app installations.
  ChromemanagementCustomersReportsCountInstalledApps(
    req: operations.ChromemanagementCustomersReportsCountInstalledAppsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsCountInstalledAppsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsCountInstalledAppsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:countInstalledApps", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersReportsCountInstalledAppsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1CountInstalledAppsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ChromemanagementCustomersReportsFindInstalledAppDevices - Generate report of devices that have a specified app installed.
  ChromemanagementCustomersReportsFindInstalledAppDevices(
    req: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{customer}/reports:findInstalledAppDevices", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1FindInstalledAppDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ChromemanagementCustomersTelemetryDevicesGet - Get telemetry device.
  ChromemanagementCustomersTelemetryDevicesGet(
    req: operations.ChromemanagementCustomersTelemetryDevicesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersTelemetryDevicesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersTelemetryDevicesGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersTelemetryDevicesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1TelemetryDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ChromemanagementCustomersTelemetryDevicesList - List all telemetry devices.
  ChromemanagementCustomersTelemetryDevicesList(
    req: operations.ChromemanagementCustomersTelemetryDevicesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromemanagementCustomersTelemetryDevicesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromemanagementCustomersTelemetryDevicesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/telemetry/devices", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ChromemanagementCustomersTelemetryDevicesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleChromeManagementV1ListTelemetryDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
