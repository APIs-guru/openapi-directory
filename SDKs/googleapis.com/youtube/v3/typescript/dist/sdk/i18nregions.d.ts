import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class I18nRegions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeI18nRegionsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeI18nRegionsList(req: operations.YoutubeI18nRegionsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeI18nRegionsListResponse>;
}
