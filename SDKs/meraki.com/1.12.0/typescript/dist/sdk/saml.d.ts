import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Saml {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationSamlIdp - Create a SAML IdP for your organization.
     *
     * Create a SAML IdP for your organization.
    **/
    createOrganizationSamlIdp(req: operations.CreateOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationSamlIdpResponse>;
    /**
     * deleteOrganizationSamlIdp - Remove a SAML IdP in your organization.
     *
     * Remove a SAML IdP in your organization.
    **/
    deleteOrganizationSamlIdp(req: operations.DeleteOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationSamlIdpResponse>;
    /**
     * getOrganizationSaml - Returns the SAML SSO enabled settings for an organization.
     *
     * Returns the SAML SSO enabled settings for an organization.
    **/
    getOrganizationSaml(req: operations.GetOrganizationSamlRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlResponse>;
    /**
     * getOrganizationSamlIdp - Get a SAML IdP from your organization.
     *
     * Get a SAML IdP from your organization.
    **/
    getOrganizationSamlIdp(req: operations.GetOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlIdpResponse>;
    /**
     * getOrganizationSamlIdps - List the SAML IdPs in your organization.
     *
     * List the SAML IdPs in your organization.
    **/
    getOrganizationSamlIdps(req: operations.GetOrganizationSamlIdpsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlIdpsResponse>;
    /**
     * updateOrganizationSaml - Updates the SAML SSO enabled settings for an organization.
     *
     * Updates the SAML SSO enabled settings for an organization.
    **/
    updateOrganizationSaml(req: operations.UpdateOrganizationSamlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlResponse>;
    /**
     * updateOrganizationSamlIdp - Update a SAML IdP in your organization
     *
     * Update a SAML IdP in your organization
    **/
    updateOrganizationSamlIdp(req: operations.UpdateOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlIdpResponse>;
}
