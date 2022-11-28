import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConnectivityMonitoringDestinations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MX network
     *
     * Return the connectivity testing destinations for an MX network
    **/
    getNetworkApplianceConnectivityMonitoringDestinations(req: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * getNetworkCellularGatewayConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MG network
     *
     * Return the connectivity testing destinations for an MG network
    **/
    getNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
    /**
     * updateNetworkApplianceConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MX network
     *
     * Update the connectivity testing destinations for an MX network
    **/
    updateNetworkApplianceConnectivityMonitoringDestinations(req: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * updateNetworkCellularGatewayConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MG network
     *
     * Update the connectivity testing destinations for an MG network
    **/
    updateNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
}
