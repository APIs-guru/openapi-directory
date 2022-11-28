import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Uplink {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkCellularGatewayUplink - Returns the uplink settings for your MG network.
     *
     * Returns the uplink settings for your MG network.
    **/
    getNetworkCellularGatewayUplink(req: operations.GetNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayUplinkResponse>;
    /**
     * getOrganizationApplianceUplinkStatuses - List the uplink status of every Meraki MX and Z series appliances in the organization
     *
     * List the uplink status of every Meraki MX and Z series appliances in the organization
    **/
    getOrganizationApplianceUplinkStatuses(req: operations.GetOrganizationApplianceUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceUplinkStatusesResponse>;
    /**
     * getOrganizationCellularGatewayUplinkStatuses - List the uplink status of every Meraki MG cellular gateway in the organization
     *
     * List the uplink status of every Meraki MG cellular gateway in the organization
    **/
    getOrganizationCellularGatewayUplinkStatuses(req: operations.GetOrganizationCellularGatewayUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCellularGatewayUplinkStatusesResponse>;
    /**
     * updateNetworkCellularGatewayUplink - Updates the uplink settings for your MG network.
     *
     * Updates the uplink settings for your MG network.
    **/
    updateNetworkCellularGatewayUplink(req: operations.UpdateNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayUplinkResponse>;
}
