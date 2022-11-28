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
     * bloggerCommentsApprove - Marks a comment as not spam by blog id, post id and comment id.
    **/
    bloggerCommentsApprove(req: operations.BloggerCommentsApproveRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsApproveResponse>;
    /**
     * bloggerCommentsDelete - Deletes a comment by blog id, post id and comment id.
    **/
    bloggerCommentsDelete(req: operations.BloggerCommentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsDeleteResponse>;
    /**
     * bloggerCommentsGet - Gets a comment by id.
    **/
    bloggerCommentsGet(req: operations.BloggerCommentsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsGetResponse>;
    /**
     * bloggerCommentsList - Lists comments.
    **/
    bloggerCommentsList(req: operations.BloggerCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsListResponse>;
    /**
     * bloggerCommentsListByBlog - Lists comments by blog.
    **/
    bloggerCommentsListByBlog(req: operations.BloggerCommentsListByBlogRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsListByBlogResponse>;
    /**
     * bloggerCommentsMarkAsSpam - Marks a comment as spam by blog id, post id and comment id.
    **/
    bloggerCommentsMarkAsSpam(req: operations.BloggerCommentsMarkAsSpamRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsMarkAsSpamResponse>;
    /**
     * bloggerCommentsRemoveContent - Removes the content of a comment by blog id, post id and comment id.
    **/
    bloggerCommentsRemoveContent(req: operations.BloggerCommentsRemoveContentRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsRemoveContentResponse>;
}
