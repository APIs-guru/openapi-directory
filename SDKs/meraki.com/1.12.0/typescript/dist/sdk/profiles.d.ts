import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Profiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSmProfiles - List all profiles in a network
     *
     * List all profiles in a network
    **/
    getNetworkSmProfiles(req: operations.GetNetworkSmProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmProfilesResponse>;
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
     * getOrganizationConfigTemplateSwitchProfiles - List the switch profiles for your switch template configuration
     *
     * List the switch profiles for your switch template configuration
    **/
    getOrganizationConfigTemplateSwitchProfiles(req: operations.GetOrganizationConfigTemplateSwitchProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilesResponse>;
    /**
     * updateOrganizationConfigTemplateSwitchProfilePort - Update a switch profile port
     *
     * Update a switch profile port
    **/
    updateOrganizationConfigTemplateSwitchProfilePort(req: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse>;
}
