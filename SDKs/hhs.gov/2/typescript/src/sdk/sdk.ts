import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://hhs.gov/api/v2",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // GetResourcesCampaignsIdJson - Get Campaign by ID
  /** 
   * Information about a specific campaign
  **/
  GetResourcesCampaignsIdJson(
    req: operations.GetResourcesCampaignsIdJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesCampaignsIdJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesCampaignsIdJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/campaigns/{id}.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesCampaignsIdJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.campaignWrapped = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesCampaignsIdMediaJson - Get MediaItems by Campaign ID
  /** 
   * Campaign Listings
  **/
  GetResourcesCampaignsIdMediaJson(
    req: operations.GetResourcesCampaignsIdMediaJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesCampaignsIdMediaJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesCampaignsIdMediaJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/campaigns/{id}/media.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesCampaignsIdMediaJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrapped = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesCampaignsIdSyndicateFormat - Get MediaItems for Campaign
  /** 
   * MediaItem
  **/
  GetResourcesCampaignsIdSyndicateFormat(
    req: operations.GetResourcesCampaignsIdSyndicateFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesCampaignsIdSyndicateFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesCampaignsIdSyndicateFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/campaigns/{id}/syndicate.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesCampaignsIdSyndicateFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.syndicateMarshallerWrapped = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesCampaignsJson - Get Campaigns
  /** 
   * Media Listings for a specific campaign
  **/
  GetResourcesCampaignsJson(
    req: operations.GetResourcesCampaignsJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesCampaignsJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesCampaignsJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/campaigns.json";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesCampaignsJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.campaignWrapped = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesJson - Get Resources by search query
  /** 
   * Global search
  **/
  GetResourcesJson(
    req: operations.GetResourcesJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources.json";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesLanguagesIdJson - Get Language by ID
  /** 
   * Information about a specific language
  **/
  GetResourcesLanguagesIdJson(
    req: operations.GetResourcesLanguagesIdJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesLanguagesIdJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesLanguagesIdJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/languages/{id}.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesLanguagesIdJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.languageWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesLanguagesJson - Get Languages
  /** 
   * Language Listings
  **/
  GetResourcesLanguagesJson(
    req: operations.GetResourcesLanguagesJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesLanguagesJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesLanguagesJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/languages.json";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesLanguagesJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.languageWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaTypesFormat - Get MediaTypes
  /** 
   * Information about media types
  **/
  GetResourcesMediaTypesFormat(
    req: operations.GetResourcesMediaTypesFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaTypesFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaTypesFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/mediaTypes.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaTypesFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaTypeHolderWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaFeaturedJson - Get the list of featured content in the syndication system
  /** 
   * Get the list of featured content in the syndication system
  **/
  GetResourcesMediaFeaturedJson(
    req: operations.GetResourcesMediaFeaturedJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaFeaturedJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaFeaturedJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/media/featured.json";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaFeaturedJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItems = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaIdContent - Get content for MediaItem
  /** 
   * The actual media content (html, image, etc...)
  **/
  GetResourcesMediaIdContent(
    req: operations.GetResourcesMediaIdContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdContentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/content", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaIdContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdContent200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaIdEmbedJson - Get embed code for MediaItem
  /** 
   * Get the javascript or iframe embed code for this item (to embed it on a web page).
  **/
  GetResourcesMediaIdEmbedJson(
    req: operations.GetResourcesMediaIdEmbedJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdEmbedJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdEmbedJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/embed.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaIdEmbedJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdEmbedJson200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaIdJson - Get MediaItem by ID
  /** 
   * Information about a specific media item
  **/
  GetResourcesMediaIdJson(
    req: operations.GetResourcesMediaIdJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaIdJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaIdPreviewJpg - Get Tag by ID
  /** 
   * Get the jpg preview of the content item where applicable.
  **/
  GetResourcesMediaIdPreviewJpg(
    req: operations.GetResourcesMediaIdPreviewJpgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdPreviewJpgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdPreviewJpgRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/preview.jpg", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaIdPreviewJpgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdPreviewJpg200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaIdRelatedMediaFormat - Get related MediaItems by ID
  /** 
   * Get the media related to the current media item.
  **/
  GetResourcesMediaIdRelatedMediaFormat(
    req: operations.GetResourcesMediaIdRelatedMediaFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdRelatedMediaFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdRelatedMediaFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/relatedMedia.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaIdRelatedMediaFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaIdSyndicateFormat - Get syndicated content for MediaItem
  /** 
   * Get syndicated content.
  **/
  GetResourcesMediaIdSyndicateFormat(
    req: operations.GetResourcesMediaIdSyndicateFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdSyndicateFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdSyndicateFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/syndicate.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaIdSyndicateFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.syndicateMarshallerWrapped = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaIdThumbnailJpg - Get JPG thumbnail for MediaItem
  /** 
   * Get the jpg thumbnail of the content item where applicable.
  **/
  GetResourcesMediaIdThumbnailJpg(
    req: operations.GetResourcesMediaIdThumbnailJpgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdThumbnailJpgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdThumbnailJpgRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/thumbnail.jpg", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaIdThumbnailJpgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdThumbnailJpg200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaIdYoutubeMetaDataJson - Get Youtube metadata for MediaItem
  /** 
   * Youtube meta-data for a video item.
  **/
  GetResourcesMediaIdYoutubeMetaDataJson(
    req: operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/{id}/youtubeMetaData.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getResourcesMediaIdYoutubeMetaDataJson200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaJson - Get MediaItems
  /** 
   * Media Items Listings
  **/
  GetResourcesMediaJson(
    req: operations.GetResourcesMediaJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/media.json";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaMostPopularMediaFormat - Get MediaItems by popularity
  /** 
   * Get the media with the highest ratings.
  **/
  GetResourcesMediaMostPopularMediaFormat(
    req: operations.GetResourcesMediaMostPopularMediaFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaMostPopularMediaFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaMostPopularMediaFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/media/mostPopularMedia.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaMostPopularMediaFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesMediaSearchResultsJson - Get MediaItems by search query
  /** 
   * Full search
  **/
  GetResourcesMediaSearchResultsJson(
    req: operations.GetResourcesMediaSearchResultsJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesMediaSearchResultsJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesMediaSearchResultsJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/media/searchResults.json";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesMediaSearchResultsJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesSourcesIdJson - Get Source by ID
  /** 
   * Information about a specific source.
  **/
  GetResourcesSourcesIdJson(
    req: operations.GetResourcesSourcesIdJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesSourcesIdJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesSourcesIdJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/sources/{id}.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesSourcesIdJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sourceWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesSourcesIdSyndicateFormat - Get MediaItems for Source
  /** 
   * MediaItem
  **/
  GetResourcesSourcesIdSyndicateFormat(
    req: operations.GetResourcesSourcesIdSyndicateFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesSourcesIdSyndicateFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesSourcesIdSyndicateFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/sources/{id}/syndicate.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesSourcesIdSyndicateFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesSourcesJson - Get Sources
  /** 
   * Source Listings
  **/
  GetResourcesSourcesJson(
    req: operations.GetResourcesSourcesJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesSourcesJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesSourcesJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resources/sources.json";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesSourcesJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sourceWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesTagsFormat - Get Tags
  /** 
   * List of Tags
  **/
  GetResourcesTagsFormat(
    req: operations.GetResourcesTagsFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesTagsFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesTagsFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/tags.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesTagsFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tagMarshallerWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesTagsIdFormat - Get Tag by ID
  /** 
   * Information about a specific tag
  **/
  GetResourcesTagsIdFormat(
    req: operations.GetResourcesTagsIdFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesTagsIdFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesTagsIdFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/tags/{id}.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesTagsIdFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tagMarshallerWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesTagsIdMediaFormat - Get MediaItems for Tag
  /** 
   * MediaItem
  **/
  GetResourcesTagsIdMediaFormat(
    req: operations.GetResourcesTagsIdMediaFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesTagsIdMediaFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesTagsIdMediaFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/tags/{id}/media.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesTagsIdMediaFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesTagsIdRelatedFormat - Get related Tags by ID
  /** 
   * Information about related tags to a specific tag
  **/
  GetResourcesTagsIdRelatedFormat(
    req: operations.GetResourcesTagsIdRelatedFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesTagsIdRelatedFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesTagsIdRelatedFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/tags/{id}/related.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesTagsIdRelatedFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tagMarshallerWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesTagsIdSyndicateFormat - Get MediaItems for Tag
  /** 
   * MediaItem
  **/
  GetResourcesTagsIdSyndicateFormat(
    req: operations.GetResourcesTagsIdSyndicateFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesTagsIdSyndicateFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesTagsIdSyndicateFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/tags/{id}/syndicate.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesTagsIdSyndicateFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getResourcesTagsIdSyndicateFormat200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesTagsTagLanguagesFormat - Get TagLanguages
  /** 
   * List of Tag Languages
  **/
  GetResourcesTagsTagLanguagesFormat(
    req: operations.GetResourcesTagsTagLanguagesFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesTagsTagLanguagesFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesTagsTagLanguagesFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/tags/tagLanguages.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesTagsTagLanguagesFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tagLanguageMarshallerWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesTagsTagTypesFormat - Get MediaItems for Tag
  /** 
   * List of Types
  **/
  GetResourcesTagsTagTypesFormat(
    req: operations.GetResourcesTagsTagTypesFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesTagsTagTypesFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesTagsTagTypesFormatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/tags/tagTypes.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesTagsTagTypesFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tagTypeMarshallerWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResourcesUserMediaListsIdJson - Get UserMediaList by ID
  /** 
   * Get a specific user media list.
  **/
  GetResourcesUserMediaListsIdJson(
    req: operations.GetResourcesUserMediaListsIdJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourcesUserMediaListsIdJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourcesUserMediaListsIdJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/resources/userMediaLists/{id}.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResourcesUserMediaListsIdJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mediaItemWrappeds = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
