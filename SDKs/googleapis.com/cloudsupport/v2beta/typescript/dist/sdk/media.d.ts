import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Media {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsupportMediaDownload - Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
    **/
    cloudsupportMediaDownload(req: operations.CloudsupportMediaDownloadRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportMediaDownloadResponse>;
    /**
     * cloudsupportMediaUpload - Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.
    **/
    cloudsupportMediaUpload(req: operations.CloudsupportMediaUploadRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportMediaUploadResponse>;
}
