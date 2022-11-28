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
     * bloggerBlogsGetByUrl - Gets a blog by url.
    **/
    bloggerBlogsGetByUrl(req: operations.BloggerBlogsGetByUrlRequest, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsGetByUrlResponse>;
    /**
     * bloggerBlogsListByUser - Lists blogs by user.
    **/
    bloggerBlogsListByUser(req: operations.BloggerBlogsListByUserRequest, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsListByUserResponse>;
}
