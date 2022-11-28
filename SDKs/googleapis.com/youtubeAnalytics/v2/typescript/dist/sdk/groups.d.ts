import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeAnalyticsGroupsDelete - Deletes a group.
    **/
    youtubeAnalyticsGroupsDelete(req: operations.YoutubeAnalyticsGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsDeleteResponse>;
    /**
     * youtubeAnalyticsGroupsInsert - Creates a group.
    **/
    youtubeAnalyticsGroupsInsert(req: operations.YoutubeAnalyticsGroupsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsInsertResponse>;
    /**
     * youtubeAnalyticsGroupsList - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
    **/
    youtubeAnalyticsGroupsList(req: operations.YoutubeAnalyticsGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsListResponse>;
    /**
     * youtubeAnalyticsGroupsUpdate - Modifies a group. For example, you could change a group's title.
    **/
    youtubeAnalyticsGroupsUpdate(req: operations.YoutubeAnalyticsGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsUpdateResponse>;
}
