import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    BloggerBlogsGet(req: operations.BloggerBlogsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsGetResponse>;
    BloggerBlogsList(req: operations.BloggerBlogsListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsListResponse>;
    BloggerCommentsGet(req: operations.BloggerCommentsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsGetResponse>;
    BloggerCommentsList(req: operations.BloggerCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsListResponse>;
    BloggerPagesGet(req: operations.BloggerPagesGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesGetResponse>;
    BloggerPagesList(req: operations.BloggerPagesListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesListResponse>;
    BloggerPostsGet(req: operations.BloggerPostsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsGetResponse>;
    BloggerPostsList(req: operations.BloggerPostsListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostsListResponse>;
    BloggerUsersGet(req: operations.BloggerUsersGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerUsersGetResponse>;
}
export {};
