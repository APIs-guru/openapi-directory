import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Statuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * getOrganizationApplianceUplinkStatuses - List the uplink status of every Meraki MX and Z series appliances in the organization
     *
     * List the uplink status of every Meraki MX and Z series appliances in the organization
    **/
    getOrganizationApplianceUplinkStatuses(req: operations.GetOrganizationApplianceUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceUplinkStatusesResponse>;
    /**
     * getOrganizationApplianceVpnStatuses - Show VPN status for networks in an organization
     *
     * Show VPN status for networks in an organization
    **/
    getOrganizationApplianceVpnStatuses(req: operations.GetOrganizationApplianceVpnStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnStatusesResponse>;
    /**
     * getOrganizationCameraOnboardingStatuses - Fetch onboarding status of cameras
     *
     * Fetch onboarding status of cameras
    **/
    getOrganizationCameraOnboardingStatuses(req: operations.GetOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse>;
    /**
     * getOrganizationCellularGatewayUplinkStatuses - List the uplink status of every Meraki MG cellular gateway in the organization
     *
     * List the uplink status of every Meraki MG cellular gateway in the organization
    **/
    getOrganizationCellularGatewayUplinkStatuses(req: operations.GetOrganizationCellularGatewayUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCellularGatewayUplinkStatusesResponse>;
    /**
     * getOrganizationDevicesStatuses - List the status of every Meraki device in the organization
     *
     * List the status of every Meraki device in the organization
    **/
    getOrganizationDevicesStatuses(req: operations.GetOrganizationDevicesStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesStatusesResponse>;
    /**
     * getOrganizationUplinksStatuses - List the uplink status of every Meraki MX, MG and Z series devices in the organization
     *
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
    **/
    getOrganizationUplinksStatuses(req: operations.GetOrganizationUplinksStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationUplinksStatusesResponse>;
    /**
     * updateOrganizationCameraOnboardingStatuses - Notify that credential handoff to camera has completed
     *
     * Notify that credential handoff to camera has completed
    **/
    updateOrganizationCameraOnboardingStatuses(req: operations.UpdateOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse>;
}
