import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Analytics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraAnalyticsLive - Returns live state from camera of analytics zones
     *
     * Returns live state from camera of analytics zones
    **/
    getDeviceCameraAnalyticsLive(req: operations.GetDeviceCameraAnalyticsLiveRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsLiveResponse>;
    /**
     * getDeviceCameraAnalyticsOverview - Returns an overview of aggregate analytics data for a timespan
     *
     * Returns an overview of aggregate analytics data for a timespan
    **/
    getDeviceCameraAnalyticsOverview(req: operations.GetDeviceCameraAnalyticsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse>;
    /**
     * getDeviceCameraAnalyticsRecent - Returns most recent record for analytics zones
     *
     * Returns most recent record for analytics zones
    **/
    getDeviceCameraAnalyticsRecent(req: operations.GetDeviceCameraAnalyticsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsRecentResponse>;
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
