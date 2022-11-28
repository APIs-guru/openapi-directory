import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Media {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getResourcesMediaFeaturedJson - Get the list of featured content in the syndication system
   *
   * Get the list of featured content in the syndication system
  **/
  getResourcesMediaFeaturedJson(
    req: operations.GetResourcesMediaFeaturedJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaFeaturedJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaFeaturedJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/media/featured.json";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaFeaturedJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mediaItems = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaIdContent - Get content for MediaItem
   *
   * The actual media content (html, image, etc...)
  **/
  getResourcesMediaIdContent(
    req: operations.GetResourcesMediaIdContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/content", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaIdContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdContent200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaIdEmbedJson - Get embed code for MediaItem
   *
   * Get the javascript or iframe embed code for this item (to embed it on a web page).
  **/
  getResourcesMediaIdEmbedJson(
    req: operations.GetResourcesMediaIdEmbedJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdEmbedJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdEmbedJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/embed.json", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaIdEmbedJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdEmbedJson200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaIdJson - Get MediaItem by ID
   *
   * Information about a specific media item
  **/
  getResourcesMediaIdJson(
    req: operations.GetResourcesMediaIdJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}.json", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaIdJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaIdPreviewJpg - Get Tag by ID
   *
   * Get the jpg preview of the content item where applicable.
  **/
  getResourcesMediaIdPreviewJpg(
    req: operations.GetResourcesMediaIdPreviewJpgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdPreviewJpgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdPreviewJpgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/preview.jpg", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaIdPreviewJpgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdPreviewJpg200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaIdRelatedMediaFormat - Get related MediaItems by ID
   *
   * Get the media related to the current media item.
  **/
  getResourcesMediaIdRelatedMediaFormat(
    req: operations.GetResourcesMediaIdRelatedMediaFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdRelatedMediaFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdRelatedMediaFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/relatedMedia.{format}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaIdRelatedMediaFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaIdSyndicateFormat - Get syndicated content for MediaItem
   *
   * Get syndicated content.
  **/
  getResourcesMediaIdSyndicateFormat(
    req: operations.GetResourcesMediaIdSyndicateFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdSyndicateFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdSyndicateFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/syndicate.{format}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaIdSyndicateFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syndicateMarshallerWrapped = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaIdThumbnailJpg - Get JPG thumbnail for MediaItem
   *
   * Get the jpg thumbnail of the content item where applicable.
  **/
  getResourcesMediaIdThumbnailJpg(
    req: operations.GetResourcesMediaIdThumbnailJpgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdThumbnailJpgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdThumbnailJpgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/thumbnail.jpg", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaIdThumbnailJpgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdThumbnailJpg200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaIdYoutubeMetaDataJson - Get Youtube metadata for MediaItem
   *
   * Youtube meta-data for a video item.
  **/
  getResourcesMediaIdYoutubeMetaDataJson(
    req: operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/youtubeMetaData.json", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdYoutubeMetaDataJson200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaJson - Get MediaItems
   *
   * Media Items Listings
  **/
  getResourcesMediaJson(
    req: operations.GetResourcesMediaJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/media.json";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaMostPopularMediaFormat - Get MediaItems by popularity
   *
   * Get the media with the highest ratings.
  **/
  getResourcesMediaMostPopularMediaFormat(
    req: operations.GetResourcesMediaMostPopularMediaFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaMostPopularMediaFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaMostPopularMediaFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/mostPopularMedia.{format}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaMostPopularMediaFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResourcesMediaSearchResultsJson - Get MediaItems by search query
   *
   * Full search
  **/
  getResourcesMediaSearchResultsJson(
    req: operations.GetResourcesMediaSearchResultsJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaSearchResultsJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaSearchResultsJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/media/searchResults.json";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourcesMediaSearchResultsJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
