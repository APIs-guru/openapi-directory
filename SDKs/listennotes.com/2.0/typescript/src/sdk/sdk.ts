import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://listen-api.listennotes.com/api/v2",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * deletePodcastById - Request to delete a podcast
   *
   * Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the "status" field in the response will be "deleted". Otherwise, the status field will be "in review". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks
   * 
  **/
  deletePodcastById(
    req: operations.DeletePodcastByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePodcastByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePodcastByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/podcasts/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePodcastByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deletePodcastResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBestPodcasts - Fetch a list of best podcasts by genre
   *
   * Get a list of curated best podcasts by genre,
   * which are curated by Listen Notes staffs based on various signals from the Internet, e.g.,
   * top charts on other podcast platforms, recommendations from mainstream media,
   * user activities on listennotes.com...
   * You can get the genre ids from `GET /genres` endpoint.
   * This endpoint returns same data as https://www.listennotes.com/best-podcasts/
   * 
  **/
  getBestPodcasts(
    req: operations.GetBestPodcastsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBestPodcastsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBestPodcastsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/best_podcasts";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBestPodcastsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bestPodcastsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCuratedPodcastById - Fetch a curated list of podcasts by id
   *
   * Get detailed meta data of all podcasts in a specific curated list.
   * This endpoint returns same data as https://www.listennotes.com/curated-podcasts/
   * 
  **/
  getCuratedPodcastById(
    req: operations.GetCuratedPodcastByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCuratedPodcastByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCuratedPodcastByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/curated_podcasts/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCuratedPodcastByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.curatedListFull = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCuratedPodcasts - Fetch curated lists of podcasts
   *
   * A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.
   * 
  **/
  getCuratedPodcasts(
    req: operations.GetCuratedPodcastsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCuratedPodcastsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCuratedPodcastsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/curated_podcasts";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCuratedPodcastsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCuratedPodcastsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEpisodeById - Fetch detailed meta data for an episode by id
   *
   * Fetch detailed meta data for a specific episode.
  **/
  getEpisodeById(
    req: operations.GetEpisodeByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEpisodeByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEpisodeByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/episodes/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEpisodeByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.episodeFull = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEpisodeRecommendations - Fetch recommendations for an episode
   *
   * Fetch up to 8 episode recommendations based on the given episode id.
  **/
  getEpisodeRecommendations(
    req: operations.GetEpisodeRecommendationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEpisodeRecommendationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEpisodeRecommendationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/episodes/{id}/recommendations", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEpisodeRecommendationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEpisodeRecommendationsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEpisodesInBatch - Batch fetch basic meta data for episodes
   *
   * Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.
   * 
  **/
  getEpisodesInBatch(
    req: operations.GetEpisodesInBatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEpisodesInBatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEpisodesInBatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/episodes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEpisodesInBatchResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEpisodesInBatchResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGenres - Fetch a list of podcast genres
   *
   * Get a list of podcast genres that are supported in Listen Notes.
   * The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
   * e.g., `GET /best_podcasts`, `GET /search`...
   * You may want to cache the list of genres on the client side.
   * 
  **/
  getGenres(
    req: operations.GetGenresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/genres";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGenresResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getGenresResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLanguages - Fetch a list of supported languages for podcasts
   *
   * Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.
   * 
  **/
  getLanguages(
    req: operations.GetLanguagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLanguagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLanguagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/languages";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLanguagesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getLanguagesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlaylistById - Fetch a playlist's info and items (i.e., episodes or podcasts).
   *
   * A playlist can be an episode list (i.e., all items are episodes) or a podcast list (i.e., all items are podcasts),
   * which is essentially the same as those created via listennotes.com/listen/.
   * This endpoint fetches a list of items (i.e., episodes or podcasts) in the playlist.
   * You can use the **last_pub_date_ms** parameter to do pagination and fetch more items.
   * A playlist can be **public** (discoverable on ListenNotes.com),
   * **unlisted** (accessible to anyone who knows the playlist id),
   * or **private** (accessible to its owner).
   * You can fetch all playlists created by you, and **public** / **unlisted** playlists created by others.
   * 
  **/
  getPlaylistById(
    req: operations.GetPlaylistByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlaylistByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlaylistByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/playlists/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPlaylistByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playlistResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlaylists - Fetch a list of your playlists.
   *
   * This endpoint returns same data as listennotes.com/listen under your account.
   * You can use the **page** parameter to do pagination and fetch more playlists.
   * 
  **/
  getPlaylists(
    req: operations.GetPlaylistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlaylistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlaylistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/playlists";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPlaylistsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playlistsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPodcastById - Fetch detailed meta data and episodes for a podcast by id
   *
   * Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
   * You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.
   * 
  **/
  getPodcastById(
    req: operations.GetPodcastByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPodcastByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPodcastByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/podcasts/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPodcastByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.podcastFull = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPodcastRecommendations - Fetch recommendations for a podcast
   *
   * Fetch up to 8 podcast recommendations based on the given podcast id.
  **/
  getPodcastRecommendations(
    req: operations.GetPodcastRecommendationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPodcastRecommendationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPodcastRecommendationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/podcasts/{id}/recommendations", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPodcastRecommendationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPodcastRecommendationsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPodcastsInBatch - Batch fetch basic meta data for podcasts
   *
   * Batch fetch basic meta data for up to 10 podcasts.
   * This endpoint could be used to build something like OPML import,
   * allowing users to import a bunch of podcasts via rss urls.
   * For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.
   * 
  **/
  getPodcastsInBatch(
    req: operations.GetPodcastsInBatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPodcastsInBatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPodcastsInBatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/podcasts";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPodcastsInBatchResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPodcastsInBatchResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRegions - Fetch a list of supported countries/regions for best podcasts
   *
   * It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.
   * 
  **/
  getRegions(
    req: operations.GetRegionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/regions";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRegionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRegionsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * justListen - Fetch a random podcast episode
   *
   * Recently published episodes are more likely to be fetched. Good luck!
  **/
  justListen(
    req: operations.JustListenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JustListenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JustListenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/just_listen";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.JustListenResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.episodeSimple = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * search - Full-text search
   *
   * Full-text search on episodes, podcasts, or curated lists of podcasts.
   * Use the `offset` parameter to paginate through search results.
   * The FREE plan allows to see up to 30 search results (or `offset` < 30) per query.
   * The PRO plan allows to see up to 300 search results (or `offset` < 300) per query.
   * The ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.
   * 
  **/
  search(
    req: operations.SearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * submitPodcast - Submit a podcast to Listen Notes database
   *
   * Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn't exist in the database, "status" in the response will be "in review", and we'll review it within 12 hours. If the podcast exists, "status" in the response will be "found". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the "email" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks
   * 
  **/
  submitPodcast(
    req: operations.SubmitPodcastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SubmitPodcastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubmitPodcastRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/podcasts/submit";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubmitPodcastResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.submitPodcastResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * typeahead - Typeahead search
   *
   * Suggest search terms, podcast genres, and podcasts.
  **/
  typeahead(
    req: operations.TypeaheadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TypeaheadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TypeaheadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/typeahead";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TypeaheadResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.typeaheadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
