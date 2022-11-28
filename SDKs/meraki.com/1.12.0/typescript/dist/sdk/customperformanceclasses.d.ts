import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomPerformanceClasses {
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
     * updateNetworkApplianceTrafficShapingCustomPerformanceClass - Update a custom performance class for an MX network
     *
     * Update a custom performance class for an MX network
    **/
    updateNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
}
