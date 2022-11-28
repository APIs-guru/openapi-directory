import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chromemanagementCustomersAppsCountChromeAppRequests - Generate summary of app installation requests.
    **/
    chromemanagementCustomersAppsCountChromeAppRequests(req: operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse>;
    /**
     * chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
    **/
    chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate(req: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse>;
    /**
     * chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
    **/
    chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention(req: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse>;
    /**
     * chromemanagementCustomersReportsCountChromeHardwareFleetDevices - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
    **/
    chromemanagementCustomersReportsCountChromeHardwareFleetDevices(req: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse>;
    /**
     * chromemanagementCustomersReportsCountChromeVersions - Generate report of installed Chrome versions.
    **/
    chromemanagementCustomersReportsCountChromeVersions(req: operations.ChromemanagementCustomersReportsCountChromeVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeVersionsResponse>;
    /**
     * chromemanagementCustomersReportsCountInstalledApps - Generate report of app installations.
    **/
    chromemanagementCustomersReportsCountInstalledApps(req: operations.ChromemanagementCustomersReportsCountInstalledAppsRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountInstalledAppsResponse>;
    /**
     * chromemanagementCustomersReportsFindInstalledAppDevices - Generate report of devices that have a specified app installed.
    **/
    chromemanagementCustomersReportsFindInstalledAppDevices(req: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse>;
    /**
     * chromemanagementCustomersTelemetryDevicesGet - Get telemetry device.
    **/
    chromemanagementCustomersTelemetryDevicesGet(req: operations.ChromemanagementCustomersTelemetryDevicesGetRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersTelemetryDevicesGetResponse>;
    /**
     * chromemanagementCustomersTelemetryDevicesList - List all telemetry devices.
    **/
    chromemanagementCustomersTelemetryDevicesList(req: operations.ChromemanagementCustomersTelemetryDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersTelemetryDevicesListResponse>;
}
