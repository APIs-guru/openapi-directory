import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Posts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bloggerPostsDelete - Deletes a post by blog id and post id.
    **/
    bloggerPostsDelete(req: operations.BloggerPostsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsDeleteResponse>;
    /**
     * bloggerPostsGet - Gets a post by blog id and post id
    **/
    bloggerPostsGet(req: operations.BloggerPostsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsGetResponse>;
    /**
     * bloggerPostsGetByPath - Gets a post by path.
    **/
    bloggerPostsGetByPath(req: operations.BloggerPostsGetByPathRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsGetByPathResponse>;
    /**
     * bloggerPostsInsert - Inserts a post.
    **/
    bloggerPostsInsert(req: operations.BloggerPostsInsertRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsInsertResponse>;
    /**
     * bloggerPostsList - Lists posts.
    **/
    bloggerPostsList(req: operations.BloggerPostsListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsListResponse>;
    /**
     * bloggerPostsPatch - Patches a post.
    **/
    bloggerPostsPatch(req: operations.BloggerPostsPatchRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsPatchResponse>;
    /**
     * bloggerPostsPublish - Publishes a post.
    **/
    bloggerPostsPublish(req: operations.BloggerPostsPublishRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsPublishResponse>;
    /**
     * bloggerPostsRevert - Reverts a published or scheduled post to draft state.
    **/
    bloggerPostsRevert(req: operations.BloggerPostsRevertRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsRevertResponse>;
    /**
     * bloggerPostsSearch - Searches for posts matching given query terms in the specified blog.
    **/
    bloggerPostsSearch(req: operations.BloggerPostsSearchRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsSearchResponse>;
    /**
     * bloggerPostsUpdate - Updates a post by blog id and post id.
    **/
    bloggerPostsUpdate(req: operations.BloggerPostsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsUpdateResponse>;
}
