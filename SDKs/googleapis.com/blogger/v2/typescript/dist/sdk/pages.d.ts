import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bloggerPagesGet - Gets a page by blog id and page id.
    **/
    bloggerPagesGet(req: operations.BloggerPagesGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesGetResponse>;
    /**
     * bloggerPagesList - Lists pages.
    **/
    bloggerPagesList(req: operations.BloggerPagesListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesListResponse>;
}
