import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PageViews {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bloggerPageViewsGet - Gets page views by blog id.
    **/
    bloggerPageViewsGet(req: operations.BloggerPageViewsGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPageViewsGetResponse>;
}
