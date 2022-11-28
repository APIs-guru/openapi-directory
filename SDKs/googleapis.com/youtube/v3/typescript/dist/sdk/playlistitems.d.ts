import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlaylistItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubePlaylistItemsDelete - Deletes a resource.
    **/
    youtubePlaylistItemsDelete(req: operations.YoutubePlaylistItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistItemsDeleteResponse>;
    /**
     * youtubePlaylistItemsInsert - Inserts a new resource into this collection.
    **/
    youtubePlaylistItemsInsert(req: operations.YoutubePlaylistItemsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistItemsInsertResponse>;
    /**
     * youtubePlaylistItemsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubePlaylistItemsList(req: operations.YoutubePlaylistItemsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistItemsListResponse>;
    /**
     * youtubePlaylistItemsUpdate - Updates an existing resource.
    **/
    youtubePlaylistItemsUpdate(req: operations.YoutubePlaylistItemsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistItemsUpdateResponse>;
}
