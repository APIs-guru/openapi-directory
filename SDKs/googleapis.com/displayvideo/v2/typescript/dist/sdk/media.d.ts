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
     * displayvideoMediaDownload - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
    **/
    displayvideoMediaDownload(req: operations.DisplayvideoMediaDownloadRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoMediaDownloadResponse>;
    /**
     * displayvideoMediaUpload - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.
    **/
    displayvideoMediaUpload(req: operations.DisplayvideoMediaUploadRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoMediaUploadResponse>;
}
