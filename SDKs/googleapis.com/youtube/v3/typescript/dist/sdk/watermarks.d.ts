import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Watermarks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeWatermarksSet - Allows upload of watermark image and setting it for a channel.
    **/
    youtubeWatermarksSet(req: operations.YoutubeWatermarksSetRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeWatermarksSetResponse>;
    /**
     * youtubeWatermarksUnset - Allows removal of channel watermark.
    **/
    youtubeWatermarksUnset(req: operations.YoutubeWatermarksUnsetRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeWatermarksUnsetResponse>;
}
