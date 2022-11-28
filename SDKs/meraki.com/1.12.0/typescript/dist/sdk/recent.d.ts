import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Recent {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraAnalyticsRecent - Returns most recent record for analytics zones
     *
     * Returns most recent record for analytics zones
    **/
    getDeviceCameraAnalyticsRecent(req: operations.GetDeviceCameraAnalyticsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsRecentResponse>;
}
