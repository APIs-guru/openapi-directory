import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ThreatMatches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * safebrowsingThreatMatchesFind - Finds the threat entries that match the Safe Browsing lists.
    **/
    safebrowsingThreatMatchesFind(req: operations.SafebrowsingThreatMatchesFindRequest, config?: AxiosRequestConfig): Promise<operations.SafebrowsingThreatMatchesFindResponse>;
}
