import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeCommentsDelete - Deletes a resource.
    **/
    youtubeCommentsDelete(req: operations.YoutubeCommentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsDeleteResponse>;
    /**
     * youtubeCommentsInsert - Inserts a new resource into this collection.
    **/
    youtubeCommentsInsert(req: operations.YoutubeCommentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsInsertResponse>;
    /**
     * youtubeCommentsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeCommentsList(req: operations.YoutubeCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsListResponse>;
    /**
     * youtubeCommentsMarkAsSpam - Expresses the caller's opinion that one or more comments should be flagged as spam.
    **/
    youtubeCommentsMarkAsSpam(req: operations.YoutubeCommentsMarkAsSpamRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsMarkAsSpamResponse>;
    /**
     * youtubeCommentsSetModerationStatus - Sets the moderation status of one or more comments.
    **/
    youtubeCommentsSetModerationStatus(req: operations.YoutubeCommentsSetModerationStatusRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsSetModerationStatusResponse>;
    /**
     * youtubeCommentsUpdate - Updates an existing resource.
    **/
    youtubeCommentsUpdate(req: operations.YoutubeCommentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsUpdateResponse>;
}
