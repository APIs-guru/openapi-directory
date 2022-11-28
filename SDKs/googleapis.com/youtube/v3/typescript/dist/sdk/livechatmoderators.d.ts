import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LiveChatModerators {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeLiveChatModeratorsDelete - Deletes a chat moderator.
    **/
    youtubeLiveChatModeratorsDelete(req: operations.YoutubeLiveChatModeratorsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatModeratorsDeleteResponse>;
    /**
     * youtubeLiveChatModeratorsInsert - Inserts a new resource into this collection.
    **/
    youtubeLiveChatModeratorsInsert(req: operations.YoutubeLiveChatModeratorsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatModeratorsInsertResponse>;
    /**
     * youtubeLiveChatModeratorsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeLiveChatModeratorsList(req: operations.YoutubeLiveChatModeratorsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatModeratorsListResponse>;
}
