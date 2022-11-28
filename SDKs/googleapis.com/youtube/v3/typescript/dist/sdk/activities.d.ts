import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeActivitiesList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeActivitiesList(req: operations.YoutubeActivitiesListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeActivitiesListResponse>;
}
