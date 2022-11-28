import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideoLink {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraVideoLink - Returns video link to the specified camera
     *
     * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
    **/
    getDeviceCameraVideoLink(req: operations.GetDeviceCameraVideoLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoLinkResponse>;
}
