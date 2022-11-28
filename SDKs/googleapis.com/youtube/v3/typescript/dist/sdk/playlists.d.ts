import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Playlists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubePlaylistsDelete - Deletes a resource.
    **/
    youtubePlaylistsDelete(req: operations.YoutubePlaylistsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistsDeleteResponse>;
    /**
     * youtubePlaylistsInsert - Inserts a new resource into this collection.
    **/
    youtubePlaylistsInsert(req: operations.YoutubePlaylistsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistsInsertResponse>;
    /**
     * youtubePlaylistsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubePlaylistsList(req: operations.YoutubePlaylistsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistsListResponse>;
    /**
     * youtubePlaylistsUpdate - Updates an existing resource.
    **/
    youtubePlaylistsUpdate(req: operations.YoutubePlaylistsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistsUpdateResponse>;
}
