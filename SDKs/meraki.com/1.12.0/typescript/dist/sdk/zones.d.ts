import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Zones {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraAnalyticsZoneHistory - Return historical records for analytic zones
     *
     * Return historical records for analytic zones
    **/
    getDeviceCameraAnalyticsZoneHistory(req: operations.GetDeviceCameraAnalyticsZoneHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZoneHistoryResponse>;
    /**
     * getDeviceCameraAnalyticsZones - Returns all configured analytic zones for this camera
     *
     * Returns all configured analytic zones for this camera
    **/
    getDeviceCameraAnalyticsZones(req: operations.GetDeviceCameraAnalyticsZonesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZonesResponse>;
}
