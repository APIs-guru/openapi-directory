import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pagespeedapi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pagespeedonlinePagespeedapiRunpagespeed - Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.
    **/
    pagespeedonlinePagespeedapiRunpagespeed(req: operations.PagespeedonlinePagespeedapiRunpagespeedRequest, config?: AxiosRequestConfig): Promise<operations.PagespeedonlinePagespeedapiRunpagespeedResponse>;
}
