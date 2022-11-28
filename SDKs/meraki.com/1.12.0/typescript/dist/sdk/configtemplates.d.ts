import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConfigTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationConfigTemplate - Create a new configuration template
     *
     * Create a new configuration template
    **/
    createOrganizationConfigTemplate(req: operations.CreateOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationConfigTemplateResponse>;
    /**
     * deleteOrganizationConfigTemplate - Remove a configuration template
     *
     * Remove a configuration template
    **/
    deleteOrganizationConfigTemplate(req: operations.DeleteOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationConfigTemplateResponse>;
    /**
     * getOrganizationConfigTemplate - Return a single configuration template
     *
     * Return a single configuration template
    **/
    getOrganizationConfigTemplate(req: operations.GetOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateResponse>;
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
     * getOrganizationConfigTemplates - List the configuration templates for this organization
     *
     * List the configuration templates for this organization
    **/
    getOrganizationConfigTemplates(req: operations.GetOrganizationConfigTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplatesResponse>;
    /**
     * updateOrganizationConfigTemplate - Update a configuration template
     *
     * Update a configuration template
    **/
    updateOrganizationConfigTemplate(req: operations.UpdateOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateResponse>;
    /**
     * updateOrganizationConfigTemplateSwitchProfilePort - Update a switch profile port
     *
     * Update a switch profile port
    **/
    updateOrganizationConfigTemplateSwitchProfilePort(req: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse>;
}
