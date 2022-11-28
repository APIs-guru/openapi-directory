import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SuperChatEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeSuperChatEventsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeSuperChatEventsList(req: operations.YoutubeSuperChatEventsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeSuperChatEventsListResponse>;
}
