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
     * bloggerCommentsGet - Gets a comment by blog id, post id and comment id.
    **/
    bloggerCommentsGet(req: operations.BloggerCommentsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsGetResponse>;
    /**
     * bloggerCommentsList - Lists comments.
    **/
    bloggerCommentsList(req: operations.BloggerCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsListResponse>;
}
