import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BrandingPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationBrandingPolicy - Add a new branding policy to an organization
     *
     * Add a new branding policy to an organization
    **/
    createOrganizationBrandingPolicy(req: operations.CreateOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationBrandingPolicyResponse>;
    /**
     * deleteOrganizationBrandingPolicy - Delete a branding policy
     *
     * Delete a branding policy
    **/
    deleteOrganizationBrandingPolicy(req: operations.DeleteOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationBrandingPolicyResponse>;
    /**
     * getOrganizationBrandingPolicies - List the branding policies of an organization
     *
     * List the branding policies of an organization
    **/
    getOrganizationBrandingPolicies(req: operations.GetOrganizationBrandingPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPoliciesResponse>;
    /**
     * getOrganizationBrandingPoliciesPriorities - Return the branding policy IDs of an organization in priority order
     *
     * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
    **/
    getOrganizationBrandingPoliciesPriorities(req: operations.GetOrganizationBrandingPoliciesPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPoliciesPrioritiesResponse>;
    /**
     * getOrganizationBrandingPolicy - Return a branding policy
     *
     * Return a branding policy
    **/
    getOrganizationBrandingPolicy(req: operations.GetOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPolicyResponse>;
    /**
     * updateOrganizationBrandingPoliciesPriorities - Update the priority ordering of an organization's branding policies.
     *
     * Update the priority ordering of an organization's branding policies.
    **/
    updateOrganizationBrandingPoliciesPriorities(req: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse>;
    /**
     * updateOrganizationBrandingPolicy - Update a branding policy
     *
     * Update a branding policy
    **/
    updateOrganizationBrandingPolicy(req: operations.UpdateOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationBrandingPolicyResponse>;
}
