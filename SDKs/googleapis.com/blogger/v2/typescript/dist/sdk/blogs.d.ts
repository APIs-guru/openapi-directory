import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Blogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bloggerBlogsGet - Gets a blog by id.
    **/
    bloggerBlogsGet(req: operations.BloggerBlogsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsGetResponse>;
    /**
     * bloggerBlogsList - Lists blogs by user id, possibly filtered.
    **/
    bloggerBlogsList(req: operations.BloggerBlogsListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsListResponse>;
}
