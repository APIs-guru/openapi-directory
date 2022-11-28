import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelBanners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeChannelBannersInsert - Inserts a new resource into this collection.
    **/
    youtubeChannelBannersInsert(req: operations.YoutubeChannelBannersInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelBannersInsertResponse>;
}
