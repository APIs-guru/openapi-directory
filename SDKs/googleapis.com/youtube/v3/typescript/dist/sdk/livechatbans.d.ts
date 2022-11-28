import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LiveChatBans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeLiveChatBansDelete - Deletes a chat ban.
    **/
    youtubeLiveChatBansDelete(req: operations.YoutubeLiveChatBansDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatBansDeleteResponse>;
    /**
     * youtubeLiveChatBansInsert - Inserts a new resource into this collection.
    **/
    youtubeLiveChatBansInsert(req: operations.YoutubeLiveChatBansInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatBansInsertResponse>;
}
