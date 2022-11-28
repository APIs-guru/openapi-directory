import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://listen-api.listennotes.com/api/v2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deletePodcastById - Request to delete a podcast
     *
     * Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the "status" field in the response will be "deleted". Otherwise, the status field will be "in review". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks
     *
    **/
    deletePodcastById(req: operations.DeletePodcastByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePodcastByIdResponse>;
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
    getBestPodcasts(req: operations.GetBestPodcastsRequest, config?: AxiosRequestConfig): Promise<operations.GetBestPodcastsResponse>;
    /**
     * getCuratedPodcastById - Fetch a curated list of podcasts by id
     *
     * Get detailed meta data of all podcasts in a specific curated list.
     * This endpoint returns same data as https://www.listennotes.com/curated-podcasts/
     *
    **/
    getCuratedPodcastById(req: operations.GetCuratedPodcastByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCuratedPodcastByIdResponse>;
    /**
     * getCuratedPodcasts - Fetch curated lists of podcasts
     *
     * A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.
     *
    **/
    getCuratedPodcasts(req: operations.GetCuratedPodcastsRequest, config?: AxiosRequestConfig): Promise<operations.GetCuratedPodcastsResponse>;
    /**
     * getEpisodeById - Fetch detailed meta data for an episode by id
     *
     * Fetch detailed meta data for a specific episode.
    **/
    getEpisodeById(req: operations.GetEpisodeByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodeByIdResponse>;
    /**
     * getEpisodeRecommendations - Fetch recommendations for an episode
     *
     * Fetch up to 8 episode recommendations based on the given episode id.
    **/
    getEpisodeRecommendations(req: operations.GetEpisodeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodeRecommendationsResponse>;
    /**
     * getEpisodesInBatch - Batch fetch basic meta data for episodes
     *
     * Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.
     *
    **/
    getEpisodesInBatch(req: operations.GetEpisodesInBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesInBatchResponse>;
    /**
     * getGenres - Fetch a list of podcast genres
     *
     * Get a list of podcast genres that are supported in Listen Notes.
     * The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
     * e.g., `GET /best_podcasts`, `GET /search`...
     * You may want to cache the list of genres on the client side.
     *
    **/
    getGenres(req: operations.GetGenresRequest, config?: AxiosRequestConfig): Promise<operations.GetGenresResponse>;
    /**
     * getLanguages - Fetch a list of supported languages for podcasts
     *
     * Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.
     *
    **/
    getLanguages(req: operations.GetLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
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
    getPlaylistById(req: operations.GetPlaylistByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistByIdResponse>;
    /**
     * getPlaylists - Fetch a list of your playlists.
     *
     * This endpoint returns same data as listennotes.com/listen under your account.
     * You can use the **page** parameter to do pagination and fetch more playlists.
     *
    **/
    getPlaylists(req: operations.GetPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsResponse>;
    /**
     * getPodcastById - Fetch detailed meta data and episodes for a podcast by id
     *
     * Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
     * You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.
     *
    **/
    getPodcastById(req: operations.GetPodcastByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastByIdResponse>;
    /**
     * getPodcastRecommendations - Fetch recommendations for a podcast
     *
     * Fetch up to 8 podcast recommendations based on the given podcast id.
    **/
    getPodcastRecommendations(req: operations.GetPodcastRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastRecommendationsResponse>;
    /**
     * getPodcastsInBatch - Batch fetch basic meta data for podcasts
     *
     * Batch fetch basic meta data for up to 10 podcasts.
     * This endpoint could be used to build something like OPML import,
     * allowing users to import a bunch of podcasts via rss urls.
     * For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.
     *
    **/
    getPodcastsInBatch(req: operations.GetPodcastsInBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastsInBatchResponse>;
    /**
     * getRegions - Fetch a list of supported countries/regions for best podcasts
     *
     * It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.
     *
    **/
    getRegions(req: operations.GetRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
    /**
     * justListen - Fetch a random podcast episode
     *
     * Recently published episodes are more likely to be fetched. Good luck!
    **/
    justListen(req: operations.JustListenRequest, config?: AxiosRequestConfig): Promise<operations.JustListenResponse>;
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
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * submitPodcast - Submit a podcast to Listen Notes database
     *
     * Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn't exist in the database, "status" in the response will be "in review", and we'll review it within 12 hours. If the podcast exists, "status" in the response will be "found". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the "email" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks
     *
    **/
    submitPodcast(req: operations.SubmitPodcastRequest, config?: AxiosRequestConfig): Promise<operations.SubmitPodcastResponse>;
    /**
     * typeahead - Typeahead search
     *
     * Suggest search terms, podcast genres, and podcasts.
    **/
    typeahead(req: operations.TypeaheadRequest, config?: AxiosRequestConfig): Promise<operations.TypeaheadResponse>;
}
export {};
