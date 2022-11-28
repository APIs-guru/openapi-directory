import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getResourcesSourcesIdJson - Get Source by ID
     *
     * Information about a specific source.
    **/
    getResourcesSourcesIdJson(req: operations.GetResourcesSourcesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesIdJsonResponse>;
    /**
     * getResourcesSourcesIdSyndicateFormat - Get MediaItems for Source
     *
     * MediaItem
    **/
    getResourcesSourcesIdSyndicateFormat(req: operations.GetResourcesSourcesIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesIdSyndicateFormatResponse>;
    /**
     * getResourcesSourcesJson - Get Sources
     *
     * Source Listings
    **/
    getResourcesSourcesJson(req: operations.GetResourcesSourcesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesJsonResponse>;
}
