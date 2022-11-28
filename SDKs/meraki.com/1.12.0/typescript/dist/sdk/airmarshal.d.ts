import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AirMarshal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessAirMarshal - List Air Marshal scan results from a network
     *
     * List Air Marshal scan results from a network
    **/
    getNetworkWirelessAirMarshal(req: operations.GetNetworkWirelessAirMarshalRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAirMarshalResponse>;
}
