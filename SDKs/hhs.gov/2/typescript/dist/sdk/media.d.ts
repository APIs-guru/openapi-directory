import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Media {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getResourcesMediaFeaturedJson - Get the list of featured content in the syndication system
     *
     * Get the list of featured content in the syndication system
    **/
    getResourcesMediaFeaturedJson(req: operations.GetResourcesMediaFeaturedJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaFeaturedJsonResponse>;
    /**
     * getResourcesMediaIdContent - Get content for MediaItem
     *
     * The actual media content (html, image, etc...)
    **/
    getResourcesMediaIdContent(req: operations.GetResourcesMediaIdContentRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdContentResponse>;
    /**
     * getResourcesMediaIdEmbedJson - Get embed code for MediaItem
     *
     * Get the javascript or iframe embed code for this item (to embed it on a web page).
    **/
    getResourcesMediaIdEmbedJson(req: operations.GetResourcesMediaIdEmbedJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdEmbedJsonResponse>;
    /**
     * getResourcesMediaIdJson - Get MediaItem by ID
     *
     * Information about a specific media item
    **/
    getResourcesMediaIdJson(req: operations.GetResourcesMediaIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdJsonResponse>;
    /**
     * getResourcesMediaIdPreviewJpg - Get Tag by ID
     *
     * Get the jpg preview of the content item where applicable.
    **/
    getResourcesMediaIdPreviewJpg(req: operations.GetResourcesMediaIdPreviewJpgRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdPreviewJpgResponse>;
    /**
     * getResourcesMediaIdRelatedMediaFormat - Get related MediaItems by ID
     *
     * Get the media related to the current media item.
    **/
    getResourcesMediaIdRelatedMediaFormat(req: operations.GetResourcesMediaIdRelatedMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdRelatedMediaFormatResponse>;
    /**
     * getResourcesMediaIdSyndicateFormat - Get syndicated content for MediaItem
     *
     * Get syndicated content.
    **/
    getResourcesMediaIdSyndicateFormat(req: operations.GetResourcesMediaIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdSyndicateFormatResponse>;
    /**
     * getResourcesMediaIdThumbnailJpg - Get JPG thumbnail for MediaItem
     *
     * Get the jpg thumbnail of the content item where applicable.
    **/
    getResourcesMediaIdThumbnailJpg(req: operations.GetResourcesMediaIdThumbnailJpgRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdThumbnailJpgResponse>;
    /**
     * getResourcesMediaIdYoutubeMetaDataJson - Get Youtube metadata for MediaItem
     *
     * Youtube meta-data for a video item.
    **/
    getResourcesMediaIdYoutubeMetaDataJson(req: operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse>;
    /**
     * getResourcesMediaJson - Get MediaItems
     *
     * Media Items Listings
    **/
    getResourcesMediaJson(req: operations.GetResourcesMediaJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaJsonResponse>;
    /**
     * getResourcesMediaMostPopularMediaFormat - Get MediaItems by popularity
     *
     * Get the media with the highest ratings.
    **/
    getResourcesMediaMostPopularMediaFormat(req: operations.GetResourcesMediaMostPopularMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaMostPopularMediaFormatResponse>;
    /**
     * getResourcesMediaSearchResultsJson - Get MediaItems by search query
     *
     * Full search
    **/
    getResourcesMediaSearchResultsJson(req: operations.GetResourcesMediaSearchResultsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaSearchResultsJsonResponse>;
}
