import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ThreatLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * safebrowsingThreatListsList - Lists the Safe Browsing threat lists available for download.
    **/
    safebrowsingThreatListsList(req: operations.SafebrowsingThreatListsListRequest, config?: AxiosRequestConfig): Promise<operations.SafebrowsingThreatListsListResponse>;
}
