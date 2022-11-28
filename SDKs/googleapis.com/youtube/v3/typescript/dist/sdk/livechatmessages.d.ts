import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LiveChatMessages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeLiveChatMessagesDelete - Deletes a chat message.
    **/
    youtubeLiveChatMessagesDelete(req: operations.YoutubeLiveChatMessagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatMessagesDeleteResponse>;
    /**
     * youtubeLiveChatMessagesInsert - Inserts a new resource into this collection.
    **/
    youtubeLiveChatMessagesInsert(req: operations.YoutubeLiveChatMessagesInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatMessagesInsertResponse>;
    /**
     * youtubeLiveChatMessagesList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeLiveChatMessagesList(req: operations.YoutubeLiveChatMessagesListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatMessagesListResponse>;
}
