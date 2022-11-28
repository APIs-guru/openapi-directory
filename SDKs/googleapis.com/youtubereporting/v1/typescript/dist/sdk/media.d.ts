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
     * youtubereportingMediaDownload - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.
    **/
    youtubereportingMediaDownload(req: operations.YoutubereportingMediaDownloadRequest, config?: AxiosRequestConfig): Promise<operations.YoutubereportingMediaDownloadResponse>;
}
