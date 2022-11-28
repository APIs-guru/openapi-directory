import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideoCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeVideoCategoriesList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeVideoCategoriesList(req: operations.YoutubeVideoCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeVideoCategoriesListResponse>;
}
