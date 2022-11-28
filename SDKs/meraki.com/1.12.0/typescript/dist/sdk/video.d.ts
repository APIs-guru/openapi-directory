import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Video {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraVideoSettings - Returns video settings for the given camera
     *
     * Returns video settings for the given camera
    **/
    getDeviceCameraVideoSettings(req: operations.GetDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoSettingsResponse>;
    /**
     * updateDeviceCameraVideoSettings - Update video settings for the given camera
     *
     * Update video settings for the given camera
    **/
    updateDeviceCameraVideoSettings(req: operations.UpdateDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraVideoSettingsResponse>;
}
