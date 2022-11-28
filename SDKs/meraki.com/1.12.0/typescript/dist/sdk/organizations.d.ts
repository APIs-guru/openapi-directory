import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * assignOrganizationLicensesSeats - Assign SM seats to a network
     *
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
    **/
    assignOrganizationLicensesSeats(req: operations.AssignOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.AssignOrganizationLicensesSeatsResponse>;
    /**
     * claimIntoOrganization - Claim a list of devices, licenses, and/or orders into an organization
     *
     * Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
    **/
    claimIntoOrganization(req: operations.ClaimIntoOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ClaimIntoOrganizationResponse>;
    /**
     * cloneOrganization - Create a new organization by cloning the addressed organization
     *
     * Create a new organization by cloning the addressed organization
    **/
    cloneOrganization(req: operations.CloneOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationResponse>;
    /**
     * combineOrganizationNetworks - Combine multiple networks into a single network
     *
     * Combine multiple networks into a single network
    **/
    combineOrganizationNetworks(req: operations.CombineOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.CombineOrganizationNetworksResponse>;
    /**
     * createOrganization - Create a new organization
     *
     * Create a new organization
    **/
    createOrganization(req: operations.CreateOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationResponse>;
    /**
     * createOrganizationActionBatch - Create an action batch
     *
     * Create an action batch
    **/
    createOrganizationActionBatch(req: operations.CreateOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationActionBatchResponse>;
    /**
     * createOrganizationAdaptivePolicyAcl - Creates new adaptive policy ACL
     *
     * Creates new adaptive policy ACL
    **/
    createOrganizationAdaptivePolicyAcl(req: operations.CreateOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyAclResponse>;
    /**
     * createOrganizationAdmin - Create a new dashboard administrator
     *
     * Create a new dashboard administrator
    **/
    createOrganizationAdmin(req: operations.CreateOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdminResponse>;
    /**
     * createOrganizationBrandingPolicy - Add a new branding policy to an organization
     *
     * Add a new branding policy to an organization
    **/
    createOrganizationBrandingPolicy(req: operations.CreateOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationBrandingPolicyResponse>;
    /**
     * createOrganizationConfigTemplate - Create a new configuration template
     *
     * Create a new configuration template
    **/
    createOrganizationConfigTemplate(req: operations.CreateOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationConfigTemplateResponse>;
    /**
     * createOrganizationNetwork - Create a network
     *
     * Create a network
    **/
    createOrganizationNetwork(req: operations.CreateOrganizationNetworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationNetworkResponse>;
    /**
     * createOrganizationSamlIdp - Create a SAML IdP for your organization.
     *
     * Create a SAML IdP for your organization.
    **/
    createOrganizationSamlIdp(req: operations.CreateOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationSamlIdpResponse>;
    /**
     * createOrganizationSamlRole - Create a SAML role
     *
     * Create a SAML role
    **/
    createOrganizationSamlRole(req: operations.CreateOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationSamlRoleResponse>;
    /**
     * deleteOrganization - Delete an organization
     *
     * Delete an organization
    **/
    deleteOrganization(req: operations.DeleteOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationResponse>;
    /**
     * deleteOrganizationActionBatch - Delete an action batch
     *
     * Delete an action batch
    **/
    deleteOrganizationActionBatch(req: operations.DeleteOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationActionBatchResponse>;
    /**
     * deleteOrganizationAdaptivePolicyAcl - Deletes the specified adaptive policy ACL
     *
     * Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
    **/
    deleteOrganizationAdaptivePolicyAcl(req: operations.DeleteOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyAclResponse>;
    /**
     * deleteOrganizationAdmin - Revoke all access for a dashboard administrator within this organization
     *
     * Revoke all access for a dashboard administrator within this organization
    **/
    deleteOrganizationAdmin(req: operations.DeleteOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdminResponse>;
    /**
     * deleteOrganizationBrandingPolicy - Delete a branding policy
     *
     * Delete a branding policy
    **/
    deleteOrganizationBrandingPolicy(req: operations.DeleteOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationBrandingPolicyResponse>;
    /**
     * deleteOrganizationConfigTemplate - Remove a configuration template
     *
     * Remove a configuration template
    **/
    deleteOrganizationConfigTemplate(req: operations.DeleteOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationConfigTemplateResponse>;
    /**
     * deleteOrganizationSamlIdp - Remove a SAML IdP in your organization.
     *
     * Remove a SAML IdP in your organization.
    **/
    deleteOrganizationSamlIdp(req: operations.DeleteOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationSamlIdpResponse>;
    /**
     * deleteOrganizationSamlRole - Remove a SAML role
     *
     * Remove a SAML role
    **/
    deleteOrganizationSamlRole(req: operations.DeleteOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationSamlRoleResponse>;
    /**
     * getOrganization - Return an organization
     *
     * Return an organization
    **/
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * getOrganizationActionBatch - Return an action batch
     *
     * Return an action batch
    **/
    getOrganizationActionBatch(req: operations.GetOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationActionBatchResponse>;
    /**
     * getOrganizationActionBatches - Return the list of action batches in the organization
     *
     * Return the list of action batches in the organization
    **/
    getOrganizationActionBatches(req: operations.GetOrganizationActionBatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationActionBatchesResponse>;
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
     * getOrganizationAdmins - List the dashboard administrators in this organization
     *
     * List the dashboard administrators in this organization
    **/
    getOrganizationAdmins(req: operations.GetOrganizationAdminsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdminsResponse>;
    /**
     * getOrganizationApiRequests - List the API requests made by an organization
     *
     * List the API requests made by an organization
    **/
    getOrganizationApiRequests(req: operations.GetOrganizationApiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsResponse>;
    /**
     * getOrganizationApiRequestsOverview - Return an aggregated overview of API requests data
     *
     * Return an aggregated overview of API requests data
    **/
    getOrganizationApiRequestsOverview(req: operations.GetOrganizationApiRequestsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponse>;
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
     * getOrganizationConfigTemplate - Return a single configuration template
     *
     * Return a single configuration template
    **/
    getOrganizationConfigTemplate(req: operations.GetOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateResponse>;
    /**
     * getOrganizationConfigTemplates - List the configuration templates for this organization
     *
     * List the configuration templates for this organization
    **/
    getOrganizationConfigTemplates(req: operations.GetOrganizationConfigTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplatesResponse>;
    /**
     * getOrganizationConfigurationChanges - View the Change Log for your organization
     *
     * View the Change Log for your organization
    **/
    getOrganizationConfigurationChanges(req: operations.GetOrganizationConfigurationChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigurationChangesResponse>;
    /**
     * getOrganizationDevices - List the devices in an organization
     *
     * List the devices in an organization
    **/
    getOrganizationDevices(req: operations.GetOrganizationDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesResponse>;
    /**
     * getOrganizationDevicesStatuses - List the status of every Meraki device in the organization
     *
     * List the status of every Meraki device in the organization
    **/
    getOrganizationDevicesStatuses(req: operations.GetOrganizationDevicesStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesStatusesResponse>;
    /**
     * getOrganizationDevicesUplinksLossAndLatency - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     *
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
    **/
    getOrganizationDevicesUplinksLossAndLatency(req: operations.GetOrganizationDevicesUplinksLossAndLatencyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesUplinksLossAndLatencyResponse>;
    /**
     * getOrganizationInventoryDevice - Return a single device from the inventory of an organization
     *
     * Return a single device from the inventory of an organization
    **/
    getOrganizationInventoryDevice(req: operations.GetOrganizationInventoryDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDeviceResponse>;
    /**
     * getOrganizationInventoryDevices - Return the device inventory for an organization
     *
     * Return the device inventory for an organization
    **/
    getOrganizationInventoryDevices(req: operations.GetOrganizationInventoryDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDevicesResponse>;
    /**
     * getOrganizationLicense - Display a license
     *
     * Display a license
    **/
    getOrganizationLicense(req: operations.GetOrganizationLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicenseResponse>;
    /**
     * getOrganizationLicenses - List the licenses for an organization
     *
     * List the licenses for an organization
    **/
    getOrganizationLicenses(req: operations.GetOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesResponse>;
    /**
     * getOrganizationLicensesOverview - Return an overview of the license state for an organization
     *
     * Return an overview of the license state for an organization
    **/
    getOrganizationLicensesOverview(req: operations.GetOrganizationLicensesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesOverviewResponse>;
    /**
     * getOrganizationLoginSecurity - Returns the login security settings for an organization.
     *
     * Returns the login security settings for an organization.
    **/
    getOrganizationLoginSecurity(req: operations.GetOrganizationLoginSecurityRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLoginSecurityResponse>;
    /**
     * getOrganizationNetworks - List the networks that the user has privileges on in an organization
     *
     * List the networks that the user has privileges on in an organization
    **/
    getOrganizationNetworks(req: operations.GetOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationNetworksResponse>;
    /**
     * getOrganizationOpenapiSpec - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     *
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
    **/
    getOrganizationOpenapiSpec(req: operations.GetOrganizationOpenapiSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationOpenapiSpecResponse>;
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
     * getOrganizationSnmp - Return the SNMP settings for an organization
     *
     * Return the SNMP settings for an organization
    **/
    getOrganizationSnmp(req: operations.GetOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSnmpResponse>;
    /**
     * getOrganizationUplinksStatuses - List the uplink status of every Meraki MX, MG and Z series devices in the organization
     *
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
    **/
    getOrganizationUplinksStatuses(req: operations.GetOrganizationUplinksStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationUplinksStatusesResponse>;
    /**
     * getOrganizationWebhooksAlertTypes - Return a list of alert types to be used with managing webhook alerts
     *
     * Return a list of alert types to be used with managing webhook alerts
    **/
    getOrganizationWebhooksAlertTypes(req: operations.GetOrganizationWebhooksAlertTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksAlertTypesResponse>;
    /**
     * getOrganizationWebhooksLogs - Return the log of webhook POSTs sent
     *
     * Return the log of webhook POSTs sent
    **/
    getOrganizationWebhooksLogs(req: operations.GetOrganizationWebhooksLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksLogsResponse>;
    /**
     * getOrganizations - List the organizations that the user has privileges on
     *
     * List the organizations that the user has privileges on
    **/
    getOrganizations(config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * moveOrganizationLicenses - Move licenses to another organization
     *
     * Move licenses to another organization. This will also move any devices that the licenses are assigned to
    **/
    moveOrganizationLicenses(req: operations.MoveOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesResponse>;
    /**
     * moveOrganizationLicensesSeats - Move SM seats to another organization
     *
     * Move SM seats to another organization
    **/
    moveOrganizationLicensesSeats(req: operations.MoveOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesSeatsResponse>;
    /**
     * renewOrganizationLicensesSeats - Renew SM seats of a license
     *
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
    **/
    renewOrganizationLicensesSeats(req: operations.RenewOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.RenewOrganizationLicensesSeatsResponse>;
    /**
     * updateOrganization - Update an organization
     *
     * Update an organization
    **/
    updateOrganization(req: operations.UpdateOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationResponse>;
    /**
     * updateOrganizationActionBatch - Update an action batch
     *
     * Update an action batch
    **/
    updateOrganizationActionBatch(req: operations.UpdateOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationActionBatchResponse>;
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
    /**
     * updateOrganizationAdmin - Update an administrator
     *
     * Update an administrator
    **/
    updateOrganizationAdmin(req: operations.UpdateOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdminResponse>;
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
    /**
     * updateOrganizationConfigTemplate - Update a configuration template
     *
     * Update a configuration template
    **/
    updateOrganizationConfigTemplate(req: operations.UpdateOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateResponse>;
    /**
     * updateOrganizationLicense - Update a license
     *
     * Update a license
    **/
    updateOrganizationLicense(req: operations.UpdateOrganizationLicenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationLicenseResponse>;
    /**
     * updateOrganizationLoginSecurity - Update the login security settings for an organization
     *
     * Update the login security settings for an organization
    **/
    updateOrganizationLoginSecurity(req: operations.UpdateOrganizationLoginSecurityRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationLoginSecurityResponse>;
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
    /**
     * updateOrganizationSamlRole - Update a SAML role
     *
     * Update a SAML role
    **/
    updateOrganizationSamlRole(req: operations.UpdateOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlRoleResponse>;
    /**
     * updateOrganizationSnmp - Update the SNMP settings for an organization
     *
     * Update the SNMP settings for an organization
    **/
    updateOrganizationSnmp(req: operations.UpdateOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSnmpResponse>;
}
