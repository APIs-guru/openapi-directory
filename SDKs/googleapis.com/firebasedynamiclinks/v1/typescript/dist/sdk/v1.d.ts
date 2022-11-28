import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * firebasedynamiclinksGetLinkStats - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
    **/
    firebasedynamiclinksGetLinkStats(req: operations.FirebasedynamiclinksGetLinkStatsRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksGetLinkStatsResponse>;
    /**
     * firebasedynamiclinksInstallAttribution - Get iOS strong/weak-match info for post-install attribution.
    **/
    firebasedynamiclinksInstallAttribution(req: operations.FirebasedynamiclinksInstallAttributionRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksInstallAttributionResponse>;
    /**
     * firebasedynamiclinksReopenAttribution - Get iOS reopen attribution for app universal link open deeplinking.
    **/
    firebasedynamiclinksReopenAttribution(req: operations.FirebasedynamiclinksReopenAttributionRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksReopenAttributionResponse>;
}
