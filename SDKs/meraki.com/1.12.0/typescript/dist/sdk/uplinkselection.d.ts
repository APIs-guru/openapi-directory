import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UplinkSelection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceTrafficShapingUplinkSelection - Show uplink selection settings for an MX network
     *
     * Show uplink selection settings for an MX network
    **/
    getNetworkApplianceTrafficShapingUplinkSelection(req: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * updateNetworkApplianceTrafficShapingUplinkSelection - Update uplink selection settings for an MX network
     *
     * Update uplink selection settings for an MX network
    **/
    updateNetworkApplianceTrafficShapingUplinkSelection(req: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse>;
}
