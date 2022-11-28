import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ThreatHits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * safebrowsingThreatHitsCreate - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.
    **/
    safebrowsingThreatHitsCreate(req: operations.SafebrowsingThreatHitsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SafebrowsingThreatHitsCreateResponse>;
}
