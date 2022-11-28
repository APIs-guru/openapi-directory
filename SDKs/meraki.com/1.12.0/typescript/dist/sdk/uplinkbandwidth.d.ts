import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UplinkBandwidth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceTrafficShapingUplinkBandwidth - Returns the uplink bandwidth settings for your MX network.
     *
     * Returns the uplink bandwidth settings for your MX network.
    **/
    getNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * updateNetworkApplianceTrafficShapingUplinkBandwidth - Updates the uplink bandwidth settings for your MX network.
     *
     * Updates the uplink bandwidth settings for your MX network.
    **/
    updateNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
}
