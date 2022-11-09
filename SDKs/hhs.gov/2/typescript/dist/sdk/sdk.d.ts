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
    /**
     * Information about a specific campaign
    **/
    GetResourcesCampaignsIdJson(req: operations.GetResourcesCampaignsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdJsonResponse>;
    /**
     * Campaign Listings
    **/
    GetResourcesCampaignsIdMediaJson(req: operations.GetResourcesCampaignsIdMediaJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdMediaJsonResponse>;
    /**
     * MediaItem
    **/
    GetResourcesCampaignsIdSyndicateFormat(req: operations.GetResourcesCampaignsIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdSyndicateFormatResponse>;
    /**
     * Media Listings for a specific campaign
    **/
    GetResourcesCampaignsJson(req: operations.GetResourcesCampaignsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsJsonResponse>;
    /**
     * Global search
    **/
    GetResourcesJson(req: operations.GetResourcesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesJsonResponse>;
    /**
     * Information about a specific language
    **/
    GetResourcesLanguagesIdJson(req: operations.GetResourcesLanguagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesLanguagesIdJsonResponse>;
    /**
     * Language Listings
    **/
    GetResourcesLanguagesJson(req: operations.GetResourcesLanguagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesLanguagesJsonResponse>;
    /**
     * Information about media types
    **/
    GetResourcesMediaTypesFormat(req: operations.GetResourcesMediaTypesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaTypesFormatResponse>;
    /**
     * Get the list of featured content in the syndication system
    **/
    GetResourcesMediaFeaturedJson(req: operations.GetResourcesMediaFeaturedJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaFeaturedJsonResponse>;
    /**
     * The actual media content (html, image, etc...)
    **/
    GetResourcesMediaIdContent(req: operations.GetResourcesMediaIdContentRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdContentResponse>;
    /**
     * Get the javascript or iframe embed code for this item (to embed it on a web page).
    **/
    GetResourcesMediaIdEmbedJson(req: operations.GetResourcesMediaIdEmbedJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdEmbedJsonResponse>;
    /**
     * Information about a specific media item
    **/
    GetResourcesMediaIdJson(req: operations.GetResourcesMediaIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdJsonResponse>;
    /**
     * Get the jpg preview of the content item where applicable.
    **/
    GetResourcesMediaIdPreviewJpg(req: operations.GetResourcesMediaIdPreviewJpgRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdPreviewJpgResponse>;
    /**
     * Get the media related to the current media item.
    **/
    GetResourcesMediaIdRelatedMediaFormat(req: operations.GetResourcesMediaIdRelatedMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdRelatedMediaFormatResponse>;
    /**
     * Get syndicated content.
    **/
    GetResourcesMediaIdSyndicateFormat(req: operations.GetResourcesMediaIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdSyndicateFormatResponse>;
    /**
     * Get the jpg thumbnail of the content item where applicable.
    **/
    GetResourcesMediaIdThumbnailJpg(req: operations.GetResourcesMediaIdThumbnailJpgRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdThumbnailJpgResponse>;
    /**
     * Youtube meta-data for a video item.
    **/
    GetResourcesMediaIdYoutubeMetaDataJson(req: operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse>;
    /**
     * Media Items Listings
    **/
    GetResourcesMediaJson(req: operations.GetResourcesMediaJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaJsonResponse>;
    /**
     * Get the media with the highest ratings.
    **/
    GetResourcesMediaMostPopularMediaFormat(req: operations.GetResourcesMediaMostPopularMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaMostPopularMediaFormatResponse>;
    /**
     * Full search
    **/
    GetResourcesMediaSearchResultsJson(req: operations.GetResourcesMediaSearchResultsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaSearchResultsJsonResponse>;
    /**
     * Information about a specific source.
    **/
    GetResourcesSourcesIdJson(req: operations.GetResourcesSourcesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesIdJsonResponse>;
    /**
     * MediaItem
    **/
    GetResourcesSourcesIdSyndicateFormat(req: operations.GetResourcesSourcesIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesIdSyndicateFormatResponse>;
    /**
     * Source Listings
    **/
    GetResourcesSourcesJson(req: operations.GetResourcesSourcesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesJsonResponse>;
    /**
     * List of Tags
    **/
    GetResourcesTagsFormat(req: operations.GetResourcesTagsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsFormatResponse>;
    /**
     * Information about a specific tag
    **/
    GetResourcesTagsIdFormat(req: operations.GetResourcesTagsIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdFormatResponse>;
    /**
     * MediaItem
    **/
    GetResourcesTagsIdMediaFormat(req: operations.GetResourcesTagsIdMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdMediaFormatResponse>;
    /**
     * Information about related tags to a specific tag
    **/
    GetResourcesTagsIdRelatedFormat(req: operations.GetResourcesTagsIdRelatedFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdRelatedFormatResponse>;
    /**
     * MediaItem
    **/
    GetResourcesTagsIdSyndicateFormat(req: operations.GetResourcesTagsIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdSyndicateFormatResponse>;
    /**
     * List of Tag Languages
    **/
    GetResourcesTagsTagLanguagesFormat(req: operations.GetResourcesTagsTagLanguagesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsTagLanguagesFormatResponse>;
    /**
     * List of Types
    **/
    GetResourcesTagsTagTypesFormat(req: operations.GetResourcesTagsTagTypesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsTagTypesFormatResponse>;
    /**
     * Get a specific user media list.
    **/
    GetResourcesUserMediaListsIdJson(req: operations.GetResourcesUserMediaListsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesUserMediaListsIdJsonResponse>;
}
export {};
