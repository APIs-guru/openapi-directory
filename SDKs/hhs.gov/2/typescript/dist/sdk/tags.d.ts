import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getResourcesTagsFormat - Get Tags
     *
     * List of Tags
    **/
    getResourcesTagsFormat(req: operations.GetResourcesTagsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsFormatResponse>;
    /**
     * getResourcesTagsIdFormat - Get Tag by ID
     *
     * Information about a specific tag
    **/
    getResourcesTagsIdFormat(req: operations.GetResourcesTagsIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdFormatResponse>;
    /**
     * getResourcesTagsIdMediaFormat - Get MediaItems for Tag
     *
     * MediaItem
    **/
    getResourcesTagsIdMediaFormat(req: operations.GetResourcesTagsIdMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdMediaFormatResponse>;
    /**
     * getResourcesTagsIdRelatedFormat - Get related Tags by ID
     *
     * Information about related tags to a specific tag
    **/
    getResourcesTagsIdRelatedFormat(req: operations.GetResourcesTagsIdRelatedFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdRelatedFormatResponse>;
    /**
     * getResourcesTagsIdSyndicateFormat - Get MediaItems for Tag
     *
     * MediaItem
    **/
    getResourcesTagsIdSyndicateFormat(req: operations.GetResourcesTagsIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdSyndicateFormatResponse>;
    /**
     * getResourcesTagsTagLanguagesFormat - Get TagLanguages
     *
     * List of Tag Languages
    **/
    getResourcesTagsTagLanguagesFormat(req: operations.GetResourcesTagsTagLanguagesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsTagLanguagesFormatResponse>;
    /**
     * getResourcesTagsTagTypesFormat - Get MediaItems for Tag
     *
     * List of Types
    **/
    getResourcesTagsTagTypesFormat(req: operations.GetResourcesTagsTagTypesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsTagTypesFormatResponse>;
}
