import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TrafficShaping {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkApplianceTrafficShapingCustomPerformanceClass - Add a custom performance class for an MX network
     *
     * Add a custom performance class for an MX network
    **/
    createNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * deleteNetworkApplianceTrafficShapingCustomPerformanceClass - Delete a custom performance class from an MX network
     *
     * Delete a custom performance class from an MX network
    **/
    deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * getNetworkApplianceTrafficShaping - Display the traffic shaping settings for an MX network
     *
     * Display the traffic shaping settings for an MX network
    **/
    getNetworkApplianceTrafficShaping(req: operations.GetNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingResponse>;
    /**
     * getNetworkApplianceTrafficShapingCustomPerformanceClass - Return a custom performance class for an MX network
     *
     * Return a custom performance class for an MX network
    **/
    getNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * getNetworkApplianceTrafficShapingCustomPerformanceClasses - List all custom performance classes for an MX network
     *
     * List all custom performance classes for an MX network
    **/
    getNetworkApplianceTrafficShapingCustomPerformanceClasses(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse>;
    /**
     * getNetworkApplianceTrafficShapingRules - Display the traffic shaping settings rules for an MX network
     *
     * Display the traffic shaping settings rules for an MX network
    **/
    getNetworkApplianceTrafficShapingRules(req: operations.GetNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * getNetworkApplianceTrafficShapingUplinkBandwidth - Returns the uplink bandwidth settings for your MX network.
     *
     * Returns the uplink bandwidth settings for your MX network.
    **/
    getNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * getNetworkApplianceTrafficShapingUplinkSelection - Show uplink selection settings for an MX network
     *
     * Show uplink selection settings for an MX network
    **/
    getNetworkApplianceTrafficShapingUplinkSelection(req: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * getNetworkTrafficShapingApplicationCategories - Returns the application categories for traffic shaping rules.
     *
     * Returns the application categories for traffic shaping rules.
    **/
    getNetworkTrafficShapingApplicationCategories(req: operations.GetNetworkTrafficShapingApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingApplicationCategoriesResponse>;
    /**
     * getNetworkTrafficShapingDscpTaggingOptions - Returns the available DSCP tagging options for your traffic shaping rules.
     *
     * Returns the available DSCP tagging options for your traffic shaping rules.
    **/
    getNetworkTrafficShapingDscpTaggingOptions(req: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse>;
    /**
     * getNetworkWirelessSsidTrafficShapingRules - Display the traffic shaping settings for a SSID on an MR network
     *
     * Display the traffic shaping settings for a SSID on an MR network
    **/
    getNetworkWirelessSsidTrafficShapingRules(req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * updateNetworkApplianceTrafficShaping - Update the traffic shaping settings for an MX network
     *
     * Update the traffic shaping settings for an MX network
    **/
    updateNetworkApplianceTrafficShaping(req: operations.UpdateNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingResponse>;
    /**
     * updateNetworkApplianceTrafficShapingCustomPerformanceClass - Update a custom performance class for an MX network
     *
     * Update a custom performance class for an MX network
    **/
    updateNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * updateNetworkApplianceTrafficShapingRules - Update the traffic shaping settings rules for an MX network
     *
     * Update the traffic shaping settings rules for an MX network
    **/
    updateNetworkApplianceTrafficShapingRules(req: operations.UpdateNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * updateNetworkApplianceTrafficShapingUplinkBandwidth - Updates the uplink bandwidth settings for your MX network.
     *
     * Updates the uplink bandwidth settings for your MX network.
    **/
    updateNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * updateNetworkApplianceTrafficShapingUplinkSelection - Update uplink selection settings for an MX network
     *
     * Update uplink selection settings for an MX network
    **/
    updateNetworkApplianceTrafficShapingUplinkSelection(req: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * updateNetworkWirelessSsidTrafficShapingRules - Update the traffic shaping settings for an SSID on an MR network
     *
     * Update the traffic shaping settings for an SSID on an MR network
    **/
    updateNetworkWirelessSsidTrafficShapingRules(req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse>;
}
