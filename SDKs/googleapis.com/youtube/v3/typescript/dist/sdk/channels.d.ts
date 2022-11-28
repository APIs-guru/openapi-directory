import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeChannelsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeChannelsList(req: operations.YoutubeChannelsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelsListResponse>;
    /**
     * youtubeChannelsUpdate - Updates an existing resource.
    **/
    youtubeChannelsUpdate(req: operations.YoutubeChannelsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelsUpdateResponse>;
}
