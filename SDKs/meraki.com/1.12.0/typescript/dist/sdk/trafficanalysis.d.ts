import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TrafficAnalysis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkTrafficAnalysis - Return the traffic analysis settings for a network
     *
     * Return the traffic analysis settings for a network
    **/
    getNetworkTrafficAnalysis(req: operations.GetNetworkTrafficAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficAnalysisResponse>;
    /**
     * updateNetworkTrafficAnalysis - Update the traffic analysis settings for a network
     *
     * Update the traffic analysis settings for a network
    **/
    updateNetworkTrafficAnalysis(req: operations.UpdateNetworkTrafficAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkTrafficAnalysisResponse>;
}
