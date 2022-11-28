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
     * bloggerPostsGet - Gets a post by blog id and post id
    **/
    bloggerPostsGet(req: operations.BloggerPostsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsGetResponse>;
    /**
     * bloggerPostsList - Lists posts.
    **/
    bloggerPostsList(req: operations.BloggerPostsListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsListResponse>;
}
