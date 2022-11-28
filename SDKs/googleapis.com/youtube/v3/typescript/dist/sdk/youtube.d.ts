import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Youtube {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeYoutubeV3UpdateCommentThreads - Updates an existing resource.
    **/
    youtubeYoutubeV3UpdateCommentThreads(req: operations.YoutubeYoutubeV3UpdateCommentThreadsRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeYoutubeV3UpdateCommentThreadsResponse>;
}
