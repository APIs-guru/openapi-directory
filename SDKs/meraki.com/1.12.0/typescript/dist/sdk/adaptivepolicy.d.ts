import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AdaptivePolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationAdaptivePolicyAcl - Creates new adaptive policy ACL
     *
     * Creates new adaptive policy ACL
    **/
    createOrganizationAdaptivePolicyAcl(req: operations.CreateOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyAclResponse>;
    /**
     * deleteOrganizationAdaptivePolicyAcl - Deletes the specified adaptive policy ACL
     *
     * Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
    **/
    deleteOrganizationAdaptivePolicyAcl(req: operations.DeleteOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyAclResponse>;
    /**
     * getOrganizationAdaptivePolicyAcl - Returns the adaptive policy ACL information
     *
     * Returns the adaptive policy ACL information
    **/
    getOrganizationAdaptivePolicyAcl(req: operations.GetOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyAclResponse>;
    /**
     * getOrganizationAdaptivePolicyAcls - List adaptive policy ACLs in a organization
     *
     * List adaptive policy ACLs in a organization
    **/
    getOrganizationAdaptivePolicyAcls(req: operations.GetOrganizationAdaptivePolicyAclsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyAclsResponse>;
    /**
     * getOrganizationAdaptivePolicySettings - Returns global adaptive policy settings in an organization
     *
     * Returns global adaptive policy settings in an organization
    **/
    getOrganizationAdaptivePolicySettings(req: operations.GetOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicySettingsResponse>;
    /**
     * updateOrganizationAdaptivePolicyAcl - Updates an adaptive policy ACL
     *
     * Updates an adaptive policy ACL
    **/
    updateOrganizationAdaptivePolicyAcl(req: operations.UpdateOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyAclResponse>;
    /**
     * updateOrganizationAdaptivePolicySettings - Update global adaptive policy settings
     *
     * Update global adaptive policy settings
    **/
    updateOrganizationAdaptivePolicySettings(req: operations.UpdateOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicySettingsResponse>;
}
