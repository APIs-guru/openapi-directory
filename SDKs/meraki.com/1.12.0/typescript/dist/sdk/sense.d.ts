import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sense {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraSense - Returns sense settings for a given camera
     *
     * Returns sense settings for a given camera
    **/
    getDeviceCameraSense(req: operations.GetDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseResponse>;
    /**
     * getDeviceCameraSenseObjectDetectionModels - Returns the MV Sense object detection model list for the given camera
     *
     * Returns the MV Sense object detection model list for the given camera
    **/
    getDeviceCameraSenseObjectDetectionModels(req: operations.GetDeviceCameraSenseObjectDetectionModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseObjectDetectionModelsResponse>;
    /**
     * updateDeviceCameraSense - Update sense settings for the given camera
     *
     * Update sense settings for the given camera
    **/
    updateDeviceCameraSense(req: operations.UpdateDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraSenseResponse>;
}
