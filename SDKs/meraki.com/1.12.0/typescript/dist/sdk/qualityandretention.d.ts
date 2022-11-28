import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class QualityAndRetention {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraQualityAndRetention - Returns quality and retention settings for the given camera
     *
     * Returns quality and retention settings for the given camera
    **/
    getDeviceCameraQualityAndRetention(req: operations.GetDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraQualityAndRetentionResponse>;
    /**
     * updateDeviceCameraQualityAndRetention - Update quality and retention settings for the given camera
     *
     * Update quality and retention settings for the given camera
    **/
    updateDeviceCameraQualityAndRetention(req: operations.UpdateDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraQualityAndRetentionResponse>;
}
