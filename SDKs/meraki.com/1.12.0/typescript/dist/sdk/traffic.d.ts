import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Traffic {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkTraffic - Return the traffic analysis data for this network
     *
     * Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
    **/
    getNetworkTraffic(req: operations.GetNetworkTrafficRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficResponse>;
}
