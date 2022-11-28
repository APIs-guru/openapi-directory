import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CommentThreads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeCommentThreadsInsert - Inserts a new resource into this collection.
    **/
    youtubeCommentThreadsInsert(req: operations.YoutubeCommentThreadsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentThreadsInsertResponse>;
    /**
     * youtubeCommentThreadsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeCommentThreadsList(req: operations.YoutubeCommentThreadsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentThreadsListResponse>;
}
