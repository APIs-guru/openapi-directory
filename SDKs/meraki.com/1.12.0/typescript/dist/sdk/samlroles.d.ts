import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SamlRoles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationSamlRole - Create a SAML role
     *
     * Create a SAML role
    **/
    createOrganizationSamlRole(req: operations.CreateOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationSamlRoleResponse>;
    /**
     * deleteOrganizationSamlRole - Remove a SAML role
     *
     * Remove a SAML role
    **/
    deleteOrganizationSamlRole(req: operations.DeleteOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationSamlRoleResponse>;
    /**
     * getOrganizationSamlRole - Return a SAML role
     *
     * Return a SAML role
    **/
    getOrganizationSamlRole(req: operations.GetOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlRoleResponse>;
    /**
     * getOrganizationSamlRoles - List the SAML roles for this organization
     *
     * List the SAML roles for this organization
    **/
    getOrganizationSamlRoles(req: operations.GetOrganizationSamlRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlRolesResponse>;
    /**
     * updateOrganizationSamlRole - Update a SAML role
     *
     * Update a SAML role
    **/
    updateOrganizationSamlRole(req: operations.UpdateOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlRoleResponse>;
}
