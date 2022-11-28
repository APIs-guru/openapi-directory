import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cycleDeviceSwitchPorts - Cycle a set of switch ports
     *
     * Cycle a set of switch ports
    **/
    cycleDeviceSwitchPorts(req: operations.CycleDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.CycleDeviceSwitchPortsResponse>;
    /**
     * getDeviceSwitchPort - Return a switch port
     *
     * Return a switch port
    **/
    getDeviceSwitchPort(req: operations.GetDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortResponse>;
    /**
     * getDeviceSwitchPorts - List the switch ports for a switch
     *
     * List the switch ports for a switch
    **/
    getDeviceSwitchPorts(req: operations.GetDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsResponse>;
    /**
     * getDeviceSwitchPortsStatuses - Return the status for all the ports of a switch
     *
     * Return the status for all the ports of a switch
    **/
    getDeviceSwitchPortsStatuses(req: operations.GetDeviceSwitchPortsStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesResponse>;
    /**
     * getDeviceSwitchPortsStatusesPackets - Return the packet counters for all the ports of a switch
     *
     * Return the packet counters for all the ports of a switch
    **/
    getDeviceSwitchPortsStatusesPackets(req: operations.GetDeviceSwitchPortsStatusesPacketsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesPacketsResponse>;
    /**
     * getNetworkAppliancePort - Return per-port VLAN settings for a single MX port.
     *
     * Return per-port VLAN settings for a single MX port.
    **/
    getNetworkAppliancePort(req: operations.GetNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortResponse>;
    /**
     * getNetworkAppliancePorts - List per-port VLAN settings for all ports of a MX.
     *
     * List per-port VLAN settings for all ports of a MX.
    **/
    getNetworkAppliancePorts(req: operations.GetNetworkAppliancePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortsResponse>;
    /**
     * getOrganizationConfigTemplateSwitchProfilePort - Return a switch profile port
     *
     * Return a switch profile port
    **/
    getOrganizationConfigTemplateSwitchProfilePort(req: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortResponse>;
    /**
     * getOrganizationConfigTemplateSwitchProfilePorts - Return all the ports of a switch profile
     *
     * Return all the ports of a switch profile
    **/
    getOrganizationConfigTemplateSwitchProfilePorts(req: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse>;
    /**
     * updateDeviceSwitchPort - Update a switch port
     *
     * Update a switch port
    **/
    updateDeviceSwitchPort(req: operations.UpdateDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchPortResponse>;
    /**
     * updateNetworkAppliancePort - Update the per-port VLAN settings for a single MX port.
     *
     * Update the per-port VLAN settings for a single MX port.
    **/
    updateNetworkAppliancePort(req: operations.UpdateNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePortResponse>;
    /**
     * updateOrganizationConfigTemplateSwitchProfilePort - Update a switch profile port
     *
     * Update a switch profile port
    **/
    updateOrganizationConfigTemplateSwitchProfilePort(req: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse>;
}
