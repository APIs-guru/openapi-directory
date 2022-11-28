import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sitemaps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * webmastersSitemapsDelete - Deletes a sitemap from this site.
    **/
    webmastersSitemapsDelete(req: operations.WebmastersSitemapsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsDeleteResponse>;
    /**
     * webmastersSitemapsGet - Retrieves information about a specific sitemap.
    **/
    webmastersSitemapsGet(req: operations.WebmastersSitemapsGetRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsGetResponse>;
    /**
     * webmastersSitemapsList - Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
    **/
    webmastersSitemapsList(req: operations.WebmastersSitemapsListRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsListResponse>;
    /**
     * webmastersSitemapsSubmit - Submits a sitemap for a site.
    **/
    webmastersSitemapsSubmit(req: operations.WebmastersSitemapsSubmitRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsSubmitResponse>;
}
