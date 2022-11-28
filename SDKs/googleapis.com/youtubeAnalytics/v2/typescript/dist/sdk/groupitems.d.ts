import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeAnalyticsGroupItemsDelete - Removes an item from a group.
    **/
    youtubeAnalyticsGroupItemsDelete(req: operations.YoutubeAnalyticsGroupItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsDeleteResponse>;
    /**
     * youtubeAnalyticsGroupItemsInsert - Creates a group item.
    **/
    youtubeAnalyticsGroupItemsInsert(req: operations.YoutubeAnalyticsGroupItemsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsInsertResponse>;
    /**
     * youtubeAnalyticsGroupItemsList - Returns a collection of group items that match the API request parameters.
    **/
    youtubeAnalyticsGroupItemsList(req: operations.YoutubeAnalyticsGroupItemsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsListResponse>;
}
