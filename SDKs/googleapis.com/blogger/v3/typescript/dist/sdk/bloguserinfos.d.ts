import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BlogUserInfos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bloggerBlogUserInfosGet - Gets one blog and user info pair by blog id and user id.
    **/
    bloggerBlogUserInfosGet(req: operations.BloggerBlogUserInfosGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerBlogUserInfosGetResponse>;
}
