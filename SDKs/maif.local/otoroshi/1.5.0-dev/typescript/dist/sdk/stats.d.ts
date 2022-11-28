import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * globalLiveStats - Get global otoroshi stats
     *
     * Get global otoroshi stats
    **/
    globalLiveStats(req: operations.GlobalLiveStatsRequest, config?: AxiosRequestConfig): Promise<operations.GlobalLiveStatsResponse>;
    /**
     * serviceLiveStats - Get live feed of otoroshi stats
     *
     * Get live feed of global otoroshi stats (global) or for a service {id}
    **/
    serviceLiveStats(req: operations.ServiceLiveStatsRequest, config?: AxiosRequestConfig): Promise<operations.ServiceLiveStatsResponse>;
}
