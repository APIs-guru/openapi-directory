import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Configure {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addNetworkSwitchStack - Add a switch to a stack
     *
     * Add a switch to a stack
    **/
    addNetworkSwitchStack(req: operations.AddNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.AddNetworkSwitchStackResponse>;
    /**
     * assignOrganizationLicensesSeats - Assign SM seats to a network
     *
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
    **/
    assignOrganizationLicensesSeats(req: operations.AssignOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.AssignOrganizationLicensesSeatsResponse>;
    /**
     * bindNetwork - Bind a network to a template.
     *
     * Bind a network to a template.
    **/
    bindNetwork(req: operations.BindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.BindNetworkResponse>;
    /**
     * checkinNetworkSmDevices - Force check-in a set of devices
     *
     * Force check-in a set of devices
    **/
    checkinNetworkSmDevices(req: operations.CheckinNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CheckinNetworkSmDevicesResponse>;
    /**
     * claimIntoOrganization - Claim a list of devices, licenses, and/or orders into an organization
     *
     * Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
    **/
    claimIntoOrganization(req: operations.ClaimIntoOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ClaimIntoOrganizationResponse>;
    /**
     * claimNetworkDevices - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     *
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
    **/
    claimNetworkDevices(req: operations.ClaimNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ClaimNetworkDevicesResponse>;
    /**
     * cloneOrganization - Create a new organization by cloning the addressed organization
     *
     * Create a new organization by cloning the addressed organization
    **/
    cloneOrganization(req: operations.CloneOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationResponse>;
    /**
     * cloneOrganizationSwitchDevices - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
     *
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
    **/
    cloneOrganizationSwitchDevices(req: operations.CloneOrganizationSwitchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationSwitchDevicesResponse>;
    /**
     * combineOrganizationNetworks - Combine multiple networks into a single network
     *
     * Combine multiple networks into a single network
    **/
    combineOrganizationNetworks(req: operations.CombineOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.CombineOrganizationNetworksResponse>;
    /**
     * createDeviceSwitchRoutingInterface - Create a layer 3 interface for a switch
     *
     * Create a layer 3 interface for a switch
    **/
    createDeviceSwitchRoutingInterface(req: operations.CreateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * createDeviceSwitchRoutingStaticRoute - Create a layer 3 static route for a switch
     *
     * Create a layer 3 static route for a switch
    **/
    createDeviceSwitchRoutingStaticRoute(req: operations.CreateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * createNetworkApplianceStaticRoute - Add a static route for an MX or teleworker network
     *
     * Add a static route for an MX or teleworker network
    **/
    createNetworkApplianceStaticRoute(req: operations.CreateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceStaticRouteResponse>;
    /**
     * createNetworkApplianceTrafficShapingCustomPerformanceClass - Add a custom performance class for an MX network
     *
     * Add a custom performance class for an MX network
    **/
    createNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * createNetworkApplianceVlan - Add a VLAN
     *
     * Add a VLAN
    **/
    createNetworkApplianceVlan(req: operations.CreateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceVlanResponse>;
    /**
     * createNetworkCameraQualityRetentionProfile - Creates new quality retention profile for this network.
     *
     * Creates new quality retention profile for this network.
    **/
    createNetworkCameraQualityRetentionProfile(req: operations.CreateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraQualityRetentionProfileResponse>;
    /**
     * createNetworkCameraWirelessProfile - Creates a new camera wireless profile for this network.
     *
     * Creates a new camera wireless profile for this network.
    **/
    createNetworkCameraWirelessProfile(req: operations.CreateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraWirelessProfileResponse>;
    /**
     * createNetworkFirmwareUpgradesRollback - Rollback a Firmware Upgrade For A Network
     *
     * Rollback a Firmware Upgrade For A Network
    **/
    createNetworkFirmwareUpgradesRollback(req: operations.CreateNetworkFirmwareUpgradesRollbackRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFirmwareUpgradesRollbackResponse>;
    /**
     * createNetworkFloorPlan - Upload a floor plan
     *
     * Upload a floor plan
    **/
    createNetworkFloorPlan(req: operations.CreateNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFloorPlanResponse>;
    /**
     * createNetworkGroupPolicy - Create a group policy
     *
     * Create a group policy
    **/
    createNetworkGroupPolicy(req: operations.CreateNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkGroupPolicyResponse>;
    /**
     * createNetworkMerakiAuthUser - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
     *
     * Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
    **/
    createNetworkMerakiAuthUser(req: operations.CreateNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkMerakiAuthUserResponse>;
    /**
     * createNetworkMqttBroker - Add an MQTT broker
     *
     * Add an MQTT broker
    **/
    createNetworkMqttBroker(req: operations.CreateNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkMqttBrokerResponse>;
    /**
     * createNetworkPiiRequest - Submit a new delete or restrict processing PII request
     *
     * Submit a new delete or restrict processing PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests
     * ```
    **/
    createNetworkPiiRequest(req: operations.CreateNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkPiiRequestResponse>;
    /**
     * createNetworkSmBypassActivationLockAttempt - Bypass activation lock attempt
     *
     * Bypass activation lock attempt
    **/
    createNetworkSmBypassActivationLockAttempt(req: operations.CreateNetworkSmBypassActivationLockAttemptRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSmBypassActivationLockAttemptResponse>;
    /**
     * createNetworkSmTargetGroup - Add a target group
     *
     * Add a target group
    **/
    createNetworkSmTargetGroup(req: operations.CreateNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSmTargetGroupResponse>;
    /**
     * createNetworkSwitchAccessPolicy - Create an access policy for a switch network
     *
     * Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
    **/
    createNetworkSwitchAccessPolicy(req: operations.CreateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchAccessPolicyResponse>;
    /**
     * createNetworkSwitchLinkAggregation - Create a link aggregation group
     *
     * Create a link aggregation group
    **/
    createNetworkSwitchLinkAggregation(req: operations.CreateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchLinkAggregationResponse>;
    /**
     * createNetworkSwitchPortSchedule - Add a switch port schedule
     *
     * Add a switch port schedule
    **/
    createNetworkSwitchPortSchedule(req: operations.CreateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchPortScheduleResponse>;
    /**
     * createNetworkSwitchQosRule - Add a quality of service rule
     *
     * Add a quality of service rule
    **/
    createNetworkSwitchQosRule(req: operations.CreateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchQosRuleResponse>;
    /**
     * createNetworkSwitchRoutingMulticastRendezvousPoint - Create a multicast rendezvous point
     *
     * Create a multicast rendezvous point
    **/
    createNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * createNetworkSwitchStack - Create a stack
     *
     * Create a stack
    **/
    createNetworkSwitchStack(req: operations.CreateNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackResponse>;
    /**
     * createNetworkSwitchStackRoutingInterface - Create a layer 3 interface for a switch stack
     *
     * Create a layer 3 interface for a switch stack
    **/
    createNetworkSwitchStackRoutingInterface(req: operations.CreateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * createNetworkSwitchStackRoutingStaticRoute - Create a layer 3 static route for a switch stack
     *
     * Create a layer 3 static route for a switch stack
    **/
    createNetworkSwitchStackRoutingStaticRoute(req: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * createNetworkWebhooksHttpServer - Add an HTTP server to a network
     *
     * Add an HTTP server to a network
    **/
    createNetworkWebhooksHttpServer(req: operations.CreateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksHttpServerResponse>;
    /**
     * createNetworkWebhooksWebhookTest - Send a test webhook for a network
     *
     * Send a test webhook for a network
    **/
    createNetworkWebhooksWebhookTest(req: operations.CreateNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksWebhookTestResponse>;
    /**
     * createNetworkWirelessRfProfile - Creates new RF profile for this network
     *
     * Creates new RF profile for this network
    **/
    createNetworkWirelessRfProfile(req: operations.CreateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessRfProfileResponse>;
    /**
     * createNetworkWirelessSsidIdentityPsk - Create an Identity PSK
     *
     * Create an Identity PSK
    **/
    createNetworkWirelessSsidIdentityPsk(req: operations.CreateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessSsidIdentityPskResponse>;
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
     * createOrganizationInsightMonitoredMediaServer - Add a media server to be monitored for this organization
     *
     * Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
    **/
    createOrganizationInsightMonitoredMediaServer(req: operations.CreateOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInsightMonitoredMediaServerResponse>;
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
     * deleteDeviceSwitchRoutingInterface - Delete a layer 3 interface from the switch
     *
     * Delete a layer 3 interface from the switch
    **/
    deleteDeviceSwitchRoutingInterface(req: operations.DeleteDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingInterfaceResponse>;
    /**
     * deleteDeviceSwitchRoutingStaticRoute - Delete a layer 3 static route for a switch
     *
     * Delete a layer 3 static route for a switch
    **/
    deleteDeviceSwitchRoutingStaticRoute(req: operations.DeleteDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * deleteNetwork - Delete a network
     *
     * Delete a network
    **/
    deleteNetwork(req: operations.DeleteNetworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkResponse>;
    /**
     * deleteNetworkApplianceStaticRoute - Delete a static route from an MX or teleworker network
     *
     * Delete a static route from an MX or teleworker network
    **/
    deleteNetworkApplianceStaticRoute(req: operations.DeleteNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceStaticRouteResponse>;
    /**
     * deleteNetworkApplianceTrafficShapingCustomPerformanceClass - Delete a custom performance class from an MX network
     *
     * Delete a custom performance class from an MX network
    **/
    deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * deleteNetworkApplianceVlan - Delete a VLAN from a network
     *
     * Delete a VLAN from a network
    **/
    deleteNetworkApplianceVlan(req: operations.DeleteNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceVlanResponse>;
    /**
     * deleteNetworkCameraQualityRetentionProfile - Delete an existing quality retention profile for this network.
     *
     * Delete an existing quality retention profile for this network.
    **/
    deleteNetworkCameraQualityRetentionProfile(req: operations.DeleteNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraQualityRetentionProfileResponse>;
    /**
     * deleteNetworkCameraWirelessProfile - Delete an existing camera wireless profile for this network.
     *
     * Delete an existing camera wireless profile for this network.
    **/
    deleteNetworkCameraWirelessProfile(req: operations.DeleteNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraWirelessProfileResponse>;
    /**
     * deleteNetworkFloorPlan - Destroy a floor plan
     *
     * Destroy a floor plan
    **/
    deleteNetworkFloorPlan(req: operations.DeleteNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkFloorPlanResponse>;
    /**
     * deleteNetworkGroupPolicy - Delete a group policy
     *
     * Delete a group policy
    **/
    deleteNetworkGroupPolicy(req: operations.DeleteNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkGroupPolicyResponse>;
    /**
     * deleteNetworkMerakiAuthUser - Deauthorize a user
     *
     * Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)
    **/
    deleteNetworkMerakiAuthUser(req: operations.DeleteNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkMerakiAuthUserResponse>;
    /**
     * deleteNetworkMqttBroker - Delete an MQTT broker
     *
     * Delete an MQTT broker
    **/
    deleteNetworkMqttBroker(req: operations.DeleteNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkMqttBrokerResponse>;
    /**
     * deleteNetworkPiiRequest - Delete a restrict processing PII request
     *
     * Delete a restrict processing PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests/{requestId}
     * ```
    **/
    deleteNetworkPiiRequest(req: operations.DeleteNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkPiiRequestResponse>;
    /**
     * deleteNetworkSmTargetGroup - Delete a target group from a network
     *
     * Delete a target group from a network
    **/
    deleteNetworkSmTargetGroup(req: operations.DeleteNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSmTargetGroupResponse>;
    /**
     * deleteNetworkSmUserAccessDevice - Delete a User Access Device
     *
     * Delete a User Access Device
    **/
    deleteNetworkSmUserAccessDevice(req: operations.DeleteNetworkSmUserAccessDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSmUserAccessDeviceResponse>;
    /**
     * deleteNetworkSwitchAccessPolicy - Delete an access policy for a switch network
     *
     * Delete an access policy for a switch network
    **/
    deleteNetworkSwitchAccessPolicy(req: operations.DeleteNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchAccessPolicyResponse>;
    /**
     * deleteNetworkSwitchLinkAggregation - Split a link aggregation group into separate ports
     *
     * Split a link aggregation group into separate ports
    **/
    deleteNetworkSwitchLinkAggregation(req: operations.DeleteNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchLinkAggregationResponse>;
    /**
     * deleteNetworkSwitchPortSchedule - Delete a switch port schedule
     *
     * Delete a switch port schedule
    **/
    deleteNetworkSwitchPortSchedule(req: operations.DeleteNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchPortScheduleResponse>;
    /**
     * deleteNetworkSwitchQosRule - Delete a quality of service rule
     *
     * Delete a quality of service rule
    **/
    deleteNetworkSwitchQosRule(req: operations.DeleteNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchQosRuleResponse>;
    /**
     * deleteNetworkSwitchRoutingMulticastRendezvousPoint - Delete a multicast rendezvous point
     *
     * Delete a multicast rendezvous point
    **/
    deleteNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * deleteNetworkSwitchStack - Delete a stack
     *
     * Delete a stack
    **/
    deleteNetworkSwitchStack(req: operations.DeleteNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackResponse>;
    /**
     * deleteNetworkSwitchStackRoutingInterface - Delete a layer 3 interface from a switch stack
     *
     * Delete a layer 3 interface from a switch stack
    **/
    deleteNetworkSwitchStackRoutingInterface(req: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * deleteNetworkSwitchStackRoutingStaticRoute - Delete a layer 3 static route for a switch stack
     *
     * Delete a layer 3 static route for a switch stack
    **/
    deleteNetworkSwitchStackRoutingStaticRoute(req: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * deleteNetworkWebhooksHttpServer - Delete an HTTP server from a network
     *
     * Delete an HTTP server from a network
    **/
    deleteNetworkWebhooksHttpServer(req: operations.DeleteNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWebhooksHttpServerResponse>;
    /**
     * deleteNetworkWirelessRfProfile - Delete a RF Profile
     *
     * Delete a RF Profile
    **/
    deleteNetworkWirelessRfProfile(req: operations.DeleteNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessRfProfileResponse>;
    /**
     * deleteNetworkWirelessSsidIdentityPsk - Delete an Identity PSK
     *
     * Delete an Identity PSK
    **/
    deleteNetworkWirelessSsidIdentityPsk(req: operations.DeleteNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessSsidIdentityPskResponse>;
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
     * deleteOrganizationInsightMonitoredMediaServer - Delete a monitored media server from this organization
     *
     * Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
    **/
    deleteOrganizationInsightMonitoredMediaServer(req: operations.DeleteOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationInsightMonitoredMediaServerResponse>;
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
     * getDevice - Return a single device
     *
     * Return a single device
    **/
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * getDeviceCameraQualityAndRetention - Returns quality and retention settings for the given camera
     *
     * Returns quality and retention settings for the given camera
    **/
    getDeviceCameraQualityAndRetention(req: operations.GetDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraQualityAndRetentionResponse>;
    /**
     * getDeviceCameraSense - Returns sense settings for a given camera
     *
     * Returns sense settings for a given camera
    **/
    getDeviceCameraSense(req: operations.GetDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseResponse>;
    /**
     * getDeviceCameraSenseObjectDetectionModels - Returns the MV Sense object detection model list for the given camera
     *
     * Returns the MV Sense object detection model list for the given camera
    **/
    getDeviceCameraSenseObjectDetectionModels(req: operations.GetDeviceCameraSenseObjectDetectionModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseObjectDetectionModelsResponse>;
    /**
     * getDeviceCameraVideoLink - Returns video link to the specified camera
     *
     * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
    **/
    getDeviceCameraVideoLink(req: operations.GetDeviceCameraVideoLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoLinkResponse>;
    /**
     * getDeviceCameraVideoSettings - Returns video settings for the given camera
     *
     * Returns video settings for the given camera
    **/
    getDeviceCameraVideoSettings(req: operations.GetDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoSettingsResponse>;
    /**
     * getDeviceCameraWirelessProfiles - Returns wireless profile assigned to the given camera
     *
     * Returns wireless profile assigned to the given camera
    **/
    getDeviceCameraWirelessProfiles(req: operations.GetDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraWirelessProfilesResponse>;
    /**
     * getDeviceCellularGatewayLan - Show the LAN Settings of a MG
     *
     * Show the LAN Settings of a MG
    **/
    getDeviceCellularGatewayLan(req: operations.GetDeviceCellularGatewayLanRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewayLanResponse>;
    /**
     * getDeviceCellularGatewayPortForwardingRules - Returns the port forwarding rules for a single MG.
     *
     * Returns the port forwarding rules for a single MG.
    **/
    getDeviceCellularGatewayPortForwardingRules(req: operations.GetDeviceCellularGatewayPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewayPortForwardingRulesResponse>;
    /**
     * getDeviceManagementInterface - Return the management interface settings for a device
     *
     * Return the management interface settings for a device
    **/
    getDeviceManagementInterface(req: operations.GetDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceManagementInterfaceResponse>;
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
     * getDeviceSwitchRoutingInterface - Return a layer 3 interface for a switch
     *
     * Return a layer 3 interface for a switch
    **/
    getDeviceSwitchRoutingInterface(req: operations.GetDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceResponse>;
    /**
     * getDeviceSwitchRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch
     *
     * Return a layer 3 interface DHCP configuration for a switch
    **/
    getDeviceSwitchRoutingInterfaceDhcp(req: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * getDeviceSwitchRoutingInterfaces - List layer 3 interfaces for a switch
     *
     * List layer 3 interfaces for a switch
    **/
    getDeviceSwitchRoutingInterfaces(req: operations.GetDeviceSwitchRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfacesResponse>;
    /**
     * getDeviceSwitchRoutingStaticRoute - Return a layer 3 static route for a switch
     *
     * Return a layer 3 static route for a switch
    **/
    getDeviceSwitchRoutingStaticRoute(req: operations.GetDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * getDeviceSwitchRoutingStaticRoutes - List layer 3 static routes for a switch
     *
     * List layer 3 static routes for a switch
    **/
    getDeviceSwitchRoutingStaticRoutes(req: operations.GetDeviceSwitchRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRoutesResponse>;
    /**
     * getDeviceSwitchWarmSpare - Return warm spare configuration for a switch
     *
     * Return warm spare configuration for a switch
    **/
    getDeviceSwitchWarmSpare(req: operations.GetDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchWarmSpareResponse>;
    /**
     * getDeviceWirelessBluetoothSettings - Return the bluetooth settings for a wireless device
     *
     * Return the bluetooth settings for a wireless device
    **/
    getDeviceWirelessBluetoothSettings(req: operations.GetDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessBluetoothSettingsResponse>;
    /**
     * getDeviceWirelessRadioSettings - Return the radio settings of a device
     *
     * Return the radio settings of a device
    **/
    getDeviceWirelessRadioSettings(req: operations.GetDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessRadioSettingsResponse>;
    /**
     * getNetwork - Return a network
     *
     * Return a network
    **/
    getNetwork(req: operations.GetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkResponse>;
    /**
     * getNetworkAlertsSettings - Return the alert configuration for this network
     *
     * Return the alert configuration for this network
    **/
    getNetworkAlertsSettings(req: operations.GetNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsSettingsResponse>;
    /**
     * getNetworkApplianceConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MX network
     *
     * Return the connectivity testing destinations for an MX network
    **/
    getNetworkApplianceConnectivityMonitoringDestinations(req: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * getNetworkApplianceContentFiltering - Return the content filtering settings for an MX network
     *
     * Return the content filtering settings for an MX network
    **/
    getNetworkApplianceContentFiltering(req: operations.GetNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringResponse>;
    /**
     * getNetworkApplianceContentFilteringCategories - List all available content filtering categories for an MX network
     *
     * List all available content filtering categories for an MX network
    **/
    getNetworkApplianceContentFilteringCategories(req: operations.GetNetworkApplianceContentFilteringCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringCategoriesResponse>;
    /**
     * getNetworkApplianceFirewallCellularFirewallRules - Return the cellular firewall rules for an MX network
     *
     * Return the cellular firewall rules for an MX network
    **/
    getNetworkApplianceFirewallCellularFirewallRules(req: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * getNetworkApplianceFirewallFirewalledService - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
     *
     * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
    **/
    getNetworkApplianceFirewallFirewalledService(req: operations.GetNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * getNetworkApplianceFirewallFirewalledServices - List the appliance services and their accessibility rules
     *
     * List the appliance services and their accessibility rules
    **/
    getNetworkApplianceFirewallFirewalledServices(req: operations.GetNetworkApplianceFirewallFirewalledServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServicesResponse>;
    /**
     * getNetworkApplianceFirewallInboundFirewallRules - Return the inbound firewall rules for an MX network
     *
     * Return the inbound firewall rules for an MX network
    **/
    getNetworkApplianceFirewallInboundFirewallRules(req: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * getNetworkApplianceFirewallL3FirewallRules - Return the L3 firewall rules for an MX network
     *
     * Return the L3 firewall rules for an MX network
    **/
    getNetworkApplianceFirewallL3FirewallRules(req: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * getNetworkApplianceFirewallL7FirewallRules - List the MX L7 firewall rules for an MX network
     *
     * List the MX L7 firewall rules for an MX network
    **/
    getNetworkApplianceFirewallL7FirewallRules(req: operations.GetNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * getNetworkApplianceFirewallL7FirewallRulesApplicationCategories - Return the L7 firewall application categories and their associated applications for an MX network
     *
     * Return the L7 firewall application categories and their associated applications for an MX network
    **/
    getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse>;
    /**
     * getNetworkApplianceFirewallOneToManyNatRules - Return the 1:Many NAT mapping rules for an MX network
     *
     * Return the 1:Many NAT mapping rules for an MX network
    **/
    getNetworkApplianceFirewallOneToManyNatRules(req: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * getNetworkApplianceFirewallOneToOneNatRules - Return the 1:1 NAT mapping rules for an MX network
     *
     * Return the 1:1 NAT mapping rules for an MX network
    **/
    getNetworkApplianceFirewallOneToOneNatRules(req: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * getNetworkApplianceFirewallPortForwardingRules - Return the port forwarding rules for an MX network
     *
     * Return the port forwarding rules for an MX network
    **/
    getNetworkApplianceFirewallPortForwardingRules(req: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallPortForwardingRulesResponse>;
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
     * getNetworkApplianceSecurityIntrusion - Returns all supported intrusion settings for an MX network
     *
     * Returns all supported intrusion settings for an MX network
    **/
    getNetworkApplianceSecurityIntrusion(req: operations.GetNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityIntrusionResponse>;
    /**
     * getNetworkApplianceSecurityMalware - Returns all supported malware settings for an MX network
     *
     * Returns all supported malware settings for an MX network
    **/
    getNetworkApplianceSecurityMalware(req: operations.GetNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityMalwareResponse>;
    /**
     * getNetworkApplianceSettings - Return the appliance settings for a network
     *
     * Return the appliance settings for a network
    **/
    getNetworkApplianceSettings(req: operations.GetNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSettingsResponse>;
    /**
     * getNetworkApplianceSingleLan - Return single LAN configuration
     *
     * Return single LAN configuration
    **/
    getNetworkApplianceSingleLan(req: operations.GetNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSingleLanResponse>;
    /**
     * getNetworkApplianceStaticRoute - Return a static route for an MX or teleworker network
     *
     * Return a static route for an MX or teleworker network
    **/
    getNetworkApplianceStaticRoute(req: operations.GetNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRouteResponse>;
    /**
     * getNetworkApplianceStaticRoutes - List the static routes for an MX or teleworker network
     *
     * List the static routes for an MX or teleworker network
    **/
    getNetworkApplianceStaticRoutes(req: operations.GetNetworkApplianceStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRoutesResponse>;
    /**
     * getNetworkApplianceTrafficShaping - Display the traffic shaping settings for an MX network
     *
     * Display the traffic shaping settings for an MX network
    **/
    getNetworkApplianceTrafficShaping(req: operations.GetNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingResponse>;
    /**
     * getNetworkApplianceTrafficShapingCustomPerformanceClass - Return a custom performance class for an MX network
     *
     * Return a custom performance class for an MX network
    **/
    getNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * getNetworkApplianceTrafficShapingCustomPerformanceClasses - List all custom performance classes for an MX network
     *
     * List all custom performance classes for an MX network
    **/
    getNetworkApplianceTrafficShapingCustomPerformanceClasses(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse>;
    /**
     * getNetworkApplianceTrafficShapingRules - Display the traffic shaping settings rules for an MX network
     *
     * Display the traffic shaping settings rules for an MX network
    **/
    getNetworkApplianceTrafficShapingRules(req: operations.GetNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * getNetworkApplianceTrafficShapingUplinkBandwidth - Returns the uplink bandwidth settings for your MX network.
     *
     * Returns the uplink bandwidth settings for your MX network.
    **/
    getNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * getNetworkApplianceTrafficShapingUplinkSelection - Show uplink selection settings for an MX network
     *
     * Show uplink selection settings for an MX network
    **/
    getNetworkApplianceTrafficShapingUplinkSelection(req: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * getNetworkApplianceVlan - Return a VLAN
     *
     * Return a VLAN
    **/
    getNetworkApplianceVlan(req: operations.GetNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlanResponse>;
    /**
     * getNetworkApplianceVlans - List the VLANs for an MX network
     *
     * List the VLANs for an MX network
    **/
    getNetworkApplianceVlans(req: operations.GetNetworkApplianceVlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansResponse>;
    /**
     * getNetworkApplianceVlansSettings - Returns the enabled status of VLANs for the network
     *
     * Returns the enabled status of VLANs for the network
    **/
    getNetworkApplianceVlansSettings(req: operations.GetNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansSettingsResponse>;
    /**
     * getNetworkApplianceVpnBgp - Return a Hub BGP Configuration
     *
     * Return a Hub BGP Configuration
    **/
    getNetworkApplianceVpnBgp(req: operations.GetNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnBgpResponse>;
    /**
     * getNetworkApplianceVpnSiteToSiteVpn - Return the site-to-site VPN settings of a network
     *
     * Return the site-to-site VPN settings of a network. Only valid for MX networks.
    **/
    getNetworkApplianceVpnSiteToSiteVpn(req: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * getNetworkApplianceWarmSpare - Return MX warm spare settings
     *
     * Return MX warm spare settings
    **/
    getNetworkApplianceWarmSpare(req: operations.GetNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceWarmSpareResponse>;
    /**
     * getNetworkCameraQualityRetentionProfile - Retrieve a single quality retention profile
     *
     * Retrieve a single quality retention profile
    **/
    getNetworkCameraQualityRetentionProfile(req: operations.GetNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraQualityRetentionProfileResponse>;
    /**
     * getNetworkCameraQualityRetentionProfiles - List the quality retention profiles for this network
     *
     * List the quality retention profiles for this network
    **/
    getNetworkCameraQualityRetentionProfiles(req: operations.GetNetworkCameraQualityRetentionProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraQualityRetentionProfilesResponse>;
    /**
     * getNetworkCameraSchedules - Returns a list of all camera recording schedules.
     *
     * Returns a list of all camera recording schedules.
    **/
    getNetworkCameraSchedules(req: operations.GetNetworkCameraSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraSchedulesResponse>;
    /**
     * getNetworkCameraWirelessProfile - Retrieve a single camera wireless profile.
     *
     * Retrieve a single camera wireless profile.
    **/
    getNetworkCameraWirelessProfile(req: operations.GetNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraWirelessProfileResponse>;
    /**
     * getNetworkCameraWirelessProfiles - List the camera wireless profiles for this network.
     *
     * List the camera wireless profiles for this network.
    **/
    getNetworkCameraWirelessProfiles(req: operations.GetNetworkCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraWirelessProfilesResponse>;
    /**
     * getNetworkCellularGatewayConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MG network
     *
     * Return the connectivity testing destinations for an MG network
    **/
    getNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
    /**
     * getNetworkCellularGatewayDhcp - List common DHCP settings of MGs
     *
     * List common DHCP settings of MGs
    **/
    getNetworkCellularGatewayDhcp(req: operations.GetNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayDhcpResponse>;
    /**
     * getNetworkCellularGatewaySubnetPool - Return the subnet pool and mask configured for MGs in the network.
     *
     * Return the subnet pool and mask configured for MGs in the network.
    **/
    getNetworkCellularGatewaySubnetPool(req: operations.GetNetworkCellularGatewaySubnetPoolRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewaySubnetPoolResponse>;
    /**
     * getNetworkCellularGatewayUplink - Returns the uplink settings for your MG network.
     *
     * Returns the uplink settings for your MG network.
    **/
    getNetworkCellularGatewayUplink(req: operations.GetNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayUplinkResponse>;
    /**
     * getNetworkClientPolicy - Return the policy assigned to a client on the network
     *
     * Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientPolicy(req: operations.GetNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientPolicyResponse>;
    /**
     * getNetworkClientSplashAuthorizationStatus - Return the splash authorization for a client, for each SSID they've associated with through splash
     *
     * Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientSplashAuthorizationStatus(req: operations.GetNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientSplashAuthorizationStatusResponse>;
    /**
     * getNetworkDevices - List the devices in a network
     *
     * List the devices in a network
    **/
    getNetworkDevices(req: operations.GetNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesResponse>;
    /**
     * getNetworkFirmwareUpgrades - Get firmware upgrade information for a network
     *
     * Get firmware upgrade information for a network
    **/
    getNetworkFirmwareUpgrades(req: operations.GetNetworkFirmwareUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesResponse>;
    /**
     * getNetworkFloorPlan - Find a floor plan by ID
     *
     * Find a floor plan by ID
    **/
    getNetworkFloorPlan(req: operations.GetNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFloorPlanResponse>;
    /**
     * getNetworkFloorPlans - List the floor plans that belong to your network
     *
     * List the floor plans that belong to your network
    **/
    getNetworkFloorPlans(req: operations.GetNetworkFloorPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFloorPlansResponse>;
    /**
     * getNetworkGroupPolicies - List the group policies in a network
     *
     * List the group policies in a network
    **/
    getNetworkGroupPolicies(req: operations.GetNetworkGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkGroupPoliciesResponse>;
    /**
     * getNetworkGroupPolicy - Display a group policy
     *
     * Display a group policy
    **/
    getNetworkGroupPolicy(req: operations.GetNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkGroupPolicyResponse>;
    /**
     * getNetworkMerakiAuthUser - Return the Meraki Auth splash guest, RADIUS, or client VPN user
     *
     * Return the Meraki Auth splash guest, RADIUS, or client VPN user
    **/
    getNetworkMerakiAuthUser(req: operations.GetNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMerakiAuthUserResponse>;
    /**
     * getNetworkMerakiAuthUsers - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
     *
     * List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
    **/
    getNetworkMerakiAuthUsers(req: operations.GetNetworkMerakiAuthUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMerakiAuthUsersResponse>;
    /**
     * getNetworkMqttBroker - Return an MQTT broker
     *
     * Return an MQTT broker
    **/
    getNetworkMqttBroker(req: operations.GetNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMqttBrokerResponse>;
    /**
     * getNetworkMqttBrokers - List the MQTT brokers for this network
     *
     * List the MQTT brokers for this network
    **/
    getNetworkMqttBrokers(req: operations.GetNetworkMqttBrokersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMqttBrokersResponse>;
    /**
     * getNetworkNetflow - Return the NetFlow traffic reporting settings for a network
     *
     * Return the NetFlow traffic reporting settings for a network
    **/
    getNetworkNetflow(req: operations.GetNetworkNetflowRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetflowResponse>;
    /**
     * getNetworkPiiPiiKeys - List the keys required to access Personally Identifiable Information (PII) for a given identifier
     *
     * List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/piiKeys
     * ```
    **/
    getNetworkPiiPiiKeys(req: operations.GetNetworkPiiPiiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiPiiKeysResponse>;
    /**
     * getNetworkPiiRequest - Return a PII request
     *
     * Return a PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests/{requestId}
     * ```
    **/
    getNetworkPiiRequest(req: operations.GetNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiRequestResponse>;
    /**
     * getNetworkPiiRequests - List the PII requests for this network or organization
     *
     * List the PII requests for this network or organization
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests
     * ```
    **/
    getNetworkPiiRequests(req: operations.GetNetworkPiiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiRequestsResponse>;
    /**
     * getNetworkPiiSmDevicesForKey - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
     *
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/smDevicesForKey
     * ```
    **/
    getNetworkPiiSmDevicesForKey(req: operations.GetNetworkPiiSmDevicesForKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiSmDevicesForKeyResponse>;
    /**
     * getNetworkPiiSmOwnersForKey - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
     *
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/smOwnersForKey
     * ```
    **/
    getNetworkPiiSmOwnersForKey(req: operations.GetNetworkPiiSmOwnersForKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiSmOwnersForKeyResponse>;
    /**
     * getNetworkSettings - Return the settings for a network
     *
     * Return the settings for a network
    **/
    getNetworkSettings(req: operations.GetNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSettingsResponse>;
    /**
     * getNetworkSmBypassActivationLockAttempt - Bypass activation lock attempt status
     *
     * Bypass activation lock attempt status
    **/
    getNetworkSmBypassActivationLockAttempt(req: operations.GetNetworkSmBypassActivationLockAttemptRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmBypassActivationLockAttemptResponse>;
    /**
     * getNetworkSmDeviceCerts - List the certs on a device
     *
     * List the certs on a device
    **/
    getNetworkSmDeviceCerts(req: operations.GetNetworkSmDeviceCertsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCertsResponse>;
    /**
     * getNetworkSmDeviceDeviceProfiles - Get the profiles associated with a device
     *
     * Get the profiles associated with a device
    **/
    getNetworkSmDeviceDeviceProfiles(req: operations.GetNetworkSmDeviceDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDeviceProfilesResponse>;
    /**
     * getNetworkSmDeviceNetworkAdapters - List the network adapters of a device
     *
     * List the network adapters of a device
    **/
    getNetworkSmDeviceNetworkAdapters(req: operations.GetNetworkSmDeviceNetworkAdaptersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceNetworkAdaptersResponse>;
    /**
     * getNetworkSmDeviceRestrictions - List the restrictions on a device
     *
     * List the restrictions on a device
    **/
    getNetworkSmDeviceRestrictions(req: operations.GetNetworkSmDeviceRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceRestrictionsResponse>;
    /**
     * getNetworkSmDeviceSecurityCenters - List the security centers on a device
     *
     * List the security centers on a device
    **/
    getNetworkSmDeviceSecurityCenters(req: operations.GetNetworkSmDeviceSecurityCentersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSecurityCentersResponse>;
    /**
     * getNetworkSmDeviceSoftwares - Get a list of softwares associated with a device
     *
     * Get a list of softwares associated with a device
    **/
    getNetworkSmDeviceSoftwares(req: operations.GetNetworkSmDeviceSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSoftwaresResponse>;
    /**
     * getNetworkSmDeviceWlanLists - List the saved SSID names on a device
     *
     * List the saved SSID names on a device
    **/
    getNetworkSmDeviceWlanLists(req: operations.GetNetworkSmDeviceWlanListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceWlanListsResponse>;
    /**
     * getNetworkSmDevices - List the devices enrolled in an SM network with various specified fields and filters
     *
     * List the devices enrolled in an SM network with various specified fields and filters
    **/
    getNetworkSmDevices(req: operations.GetNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicesResponse>;
    /**
     * getNetworkSmProfiles - List all profiles in a network
     *
     * List all profiles in a network
    **/
    getNetworkSmProfiles(req: operations.GetNetworkSmProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmProfilesResponse>;
    /**
     * getNetworkSmTargetGroup - Return a target group
     *
     * Return a target group
    **/
    getNetworkSmTargetGroup(req: operations.GetNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTargetGroupResponse>;
    /**
     * getNetworkSmTargetGroups - List the target groups in this network
     *
     * List the target groups in this network
    **/
    getNetworkSmTargetGroups(req: operations.GetNetworkSmTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTargetGroupsResponse>;
    /**
     * getNetworkSmUserAccessDevices - List User Access Devices and its Trusted Access Connections
     *
     * List User Access Devices and its Trusted Access Connections
    **/
    getNetworkSmUserAccessDevices(req: operations.GetNetworkSmUserAccessDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserAccessDevicesResponse>;
    /**
     * getNetworkSmUserDeviceProfiles - Get the profiles associated with a user
     *
     * Get the profiles associated with a user
    **/
    getNetworkSmUserDeviceProfiles(req: operations.GetNetworkSmUserDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserDeviceProfilesResponse>;
    /**
     * getNetworkSmUserSoftwares - Get a list of softwares associated with a user
     *
     * Get a list of softwares associated with a user
    **/
    getNetworkSmUserSoftwares(req: operations.GetNetworkSmUserSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserSoftwaresResponse>;
    /**
     * getNetworkSmUsers - List the owners in an SM network with various specified fields and filters
     *
     * List the owners in an SM network with various specified fields and filters
    **/
    getNetworkSmUsers(req: operations.GetNetworkSmUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUsersResponse>;
    /**
     * getNetworkSnmp - Return the SNMP settings for a network
     *
     * Return the SNMP settings for a network
    **/
    getNetworkSnmp(req: operations.GetNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSnmpResponse>;
    /**
     * getNetworkSwitchAccessControlLists - Return the access control lists for a MS network
     *
     * Return the access control lists for a MS network
    **/
    getNetworkSwitchAccessControlLists(req: operations.GetNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessControlListsResponse>;
    /**
     * getNetworkSwitchAccessPolicies - List the access policies for a switch network
     *
     * List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
    **/
    getNetworkSwitchAccessPolicies(req: operations.GetNetworkSwitchAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPoliciesResponse>;
    /**
     * getNetworkSwitchAccessPolicy - Return a specific access policy for a switch network
     *
     * Return a specific access policy for a switch network
    **/
    getNetworkSwitchAccessPolicy(req: operations.GetNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPolicyResponse>;
    /**
     * getNetworkSwitchAlternateManagementInterface - Return the switch alternate management interface for the network
     *
     * Return the switch alternate management interface for the network
    **/
    getNetworkSwitchAlternateManagementInterface(req: operations.GetNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * getNetworkSwitchDhcpServerPolicy - Return the DHCP server policy
     *
     * Return the DHCP server policy
    **/
    getNetworkSwitchDhcpServerPolicy(req: operations.GetNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * getNetworkSwitchDscpToCosMappings - Return the DSCP to CoS mappings
     *
     * Return the DSCP to CoS mappings
    **/
    getNetworkSwitchDscpToCosMappings(req: operations.GetNetworkSwitchDscpToCosMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDscpToCosMappingsResponse>;
    /**
     * getNetworkSwitchLinkAggregations - List link aggregation groups
     *
     * List link aggregation groups
    **/
    getNetworkSwitchLinkAggregations(req: operations.GetNetworkSwitchLinkAggregationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchLinkAggregationsResponse>;
    /**
     * getNetworkSwitchMtu - Return the MTU configuration
     *
     * Return the MTU configuration
    **/
    getNetworkSwitchMtu(req: operations.GetNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchMtuResponse>;
    /**
     * getNetworkSwitchPortSchedules - List switch port schedules
     *
     * List switch port schedules
    **/
    getNetworkSwitchPortSchedules(req: operations.GetNetworkSwitchPortSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchPortSchedulesResponse>;
    /**
     * getNetworkSwitchQosRule - Return a quality of service rule
     *
     * Return a quality of service rule
    **/
    getNetworkSwitchQosRule(req: operations.GetNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRuleResponse>;
    /**
     * getNetworkSwitchQosRules - List quality of service rules
     *
     * List quality of service rules
    **/
    getNetworkSwitchQosRules(req: operations.GetNetworkSwitchQosRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesResponse>;
    /**
     * getNetworkSwitchQosRulesOrder - Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * Return the quality of service rule IDs by order in which they will be processed by the switch
    **/
    getNetworkSwitchQosRulesOrder(req: operations.GetNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesOrderResponse>;
    /**
     * getNetworkSwitchRoutingMulticast - Return multicast settings for a network
     *
     * Return multicast settings for a network
    **/
    getNetworkSwitchRoutingMulticast(req: operations.GetNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastResponse>;
    /**
     * getNetworkSwitchRoutingMulticastRendezvousPoint - Return a multicast rendezvous point
     *
     * Return a multicast rendezvous point
    **/
    getNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * getNetworkSwitchRoutingMulticastRendezvousPoints - List multicast rendezvous points
     *
     * List multicast rendezvous points
    **/
    getNetworkSwitchRoutingMulticastRendezvousPoints(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse>;
    /**
     * getNetworkSwitchRoutingOspf - Return layer 3 OSPF routing configuration
     *
     * Return layer 3 OSPF routing configuration
    **/
    getNetworkSwitchRoutingOspf(req: operations.GetNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingOspfResponse>;
    /**
     * getNetworkSwitchSettings - Returns the switch network settings
     *
     * Returns the switch network settings
    **/
    getNetworkSwitchSettings(req: operations.GetNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsResponse>;
    /**
     * getNetworkSwitchStack - Show a switch stack
     *
     * Show a switch stack
    **/
    getNetworkSwitchStack(req: operations.GetNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackResponse>;
    /**
     * getNetworkSwitchStackRoutingInterface - Return a layer 3 interface from a switch stack
     *
     * Return a layer 3 interface from a switch stack
    **/
    getNetworkSwitchStackRoutingInterface(req: operations.GetNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * getNetworkSwitchStackRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch stack
     *
     * Return a layer 3 interface DHCP configuration for a switch stack
    **/
    getNetworkSwitchStackRoutingInterfaceDhcp(req: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * getNetworkSwitchStackRoutingInterfaces - List layer 3 interfaces for a switch stack
     *
     * List layer 3 interfaces for a switch stack
    **/
    getNetworkSwitchStackRoutingInterfaces(req: operations.GetNetworkSwitchStackRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfacesResponse>;
    /**
     * getNetworkSwitchStackRoutingStaticRoute - Return a layer 3 static route for a switch stack
     *
     * Return a layer 3 static route for a switch stack
    **/
    getNetworkSwitchStackRoutingStaticRoute(req: operations.GetNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * getNetworkSwitchStackRoutingStaticRoutes - List layer 3 static routes for a switch stack
     *
     * List layer 3 static routes for a switch stack
    **/
    getNetworkSwitchStackRoutingStaticRoutes(req: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRoutesResponse>;
    /**
     * getNetworkSwitchStacks - List the switch stacks in a network
     *
     * List the switch stacks in a network
    **/
    getNetworkSwitchStacks(req: operations.GetNetworkSwitchStacksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStacksResponse>;
    /**
     * getNetworkSwitchStormControl - Return the storm control configuration for a switch network
     *
     * Return the storm control configuration for a switch network
    **/
    getNetworkSwitchStormControl(req: operations.GetNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStormControlResponse>;
    /**
     * getNetworkSwitchStp - Returns STP settings
     *
     * Returns STP settings
    **/
    getNetworkSwitchStp(req: operations.GetNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStpResponse>;
    /**
     * getNetworkSyslogServers - List the syslog servers for a network
     *
     * List the syslog servers for a network
    **/
    getNetworkSyslogServers(req: operations.GetNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSyslogServersResponse>;
    /**
     * getNetworkTrafficAnalysis - Return the traffic analysis settings for a network
     *
     * Return the traffic analysis settings for a network
    **/
    getNetworkTrafficAnalysis(req: operations.GetNetworkTrafficAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficAnalysisResponse>;
    /**
     * getNetworkTrafficShapingApplicationCategories - Returns the application categories for traffic shaping rules.
     *
     * Returns the application categories for traffic shaping rules.
    **/
    getNetworkTrafficShapingApplicationCategories(req: operations.GetNetworkTrafficShapingApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingApplicationCategoriesResponse>;
    /**
     * getNetworkTrafficShapingDscpTaggingOptions - Returns the available DSCP tagging options for your traffic shaping rules.
     *
     * Returns the available DSCP tagging options for your traffic shaping rules.
    **/
    getNetworkTrafficShapingDscpTaggingOptions(req: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse>;
    /**
     * getNetworkWebhooksHttpServer - Return an HTTP server for a network
     *
     * Return an HTTP server for a network
    **/
    getNetworkWebhooksHttpServer(req: operations.GetNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksHttpServerResponse>;
    /**
     * getNetworkWebhooksHttpServers - List the HTTP servers for a network
     *
     * List the HTTP servers for a network
    **/
    getNetworkWebhooksHttpServers(req: operations.GetNetworkWebhooksHttpServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksHttpServersResponse>;
    /**
     * getNetworkWebhooksWebhookTest - Return the status of a webhook test for a network
     *
     * Return the status of a webhook test for a network
    **/
    getNetworkWebhooksWebhookTest(req: operations.GetNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksWebhookTestResponse>;
    /**
     * getNetworkWirelessAlternateManagementInterface - Return alternate management interface and devices with IP assigned
     *
     * Return alternate management interface and devices with IP assigned
    **/
    getNetworkWirelessAlternateManagementInterface(req: operations.GetNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * getNetworkWirelessBilling - Return the billing settings of this network
     *
     * Return the billing settings of this network
    **/
    getNetworkWirelessBilling(req: operations.GetNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBillingResponse>;
    /**
     * getNetworkWirelessBluetoothSettings - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     *
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
    **/
    getNetworkWirelessBluetoothSettings(req: operations.GetNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBluetoothSettingsResponse>;
    /**
     * getNetworkWirelessRfProfile - Return a RF profile
     *
     * Return a RF profile
    **/
    getNetworkWirelessRfProfile(req: operations.GetNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfileResponse>;
    /**
     * getNetworkWirelessRfProfiles - List the non-basic RF profiles for this network
     *
     * List the non-basic RF profiles for this network
    **/
    getNetworkWirelessRfProfiles(req: operations.GetNetworkWirelessRfProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfilesResponse>;
    /**
     * getNetworkWirelessSettings - Return the wireless settings for a network
     *
     * Return the wireless settings for a network
    **/
    getNetworkWirelessSettings(req: operations.GetNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSettingsResponse>;
    /**
     * getNetworkWirelessSsid - Return a single MR SSID
     *
     * Return a single MR SSID
    **/
    getNetworkWirelessSsid(req: operations.GetNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidResponse>;
    /**
     * getNetworkWirelessSsidBonjourForwarding - List the Bonjour forwarding setting and rules for the SSID
     *
     * List the Bonjour forwarding setting and rules for the SSID
    **/
    getNetworkWirelessSsidBonjourForwarding(req: operations.GetNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * getNetworkWirelessSsidDeviceTypeGroupPolicies - List the device type group policies for the SSID
     *
     * List the device type group policies for the SSID
    **/
    getNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * getNetworkWirelessSsidEapOverride - Return the EAP overridden parameters for an SSID
     *
     * Return the EAP overridden parameters for an SSID
    **/
    getNetworkWirelessSsidEapOverride(req: operations.GetNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidEapOverrideResponse>;
    /**
     * getNetworkWirelessSsidFirewallL3FirewallRules - Return the L3 firewall rules for an SSID on an MR network
     *
     * Return the L3 firewall rules for an SSID on an MR network
    **/
    getNetworkWirelessSsidFirewallL3FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * getNetworkWirelessSsidFirewallL7FirewallRules - Return the L7 firewall rules for an SSID on an MR network
     *
     * Return the L7 firewall rules for an SSID on an MR network
    **/
    getNetworkWirelessSsidFirewallL7FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * getNetworkWirelessSsidHotspot20 - Return the Hotspot 2.0 settings for an SSID
     *
     * Return the Hotspot 2.0 settings for an SSID
    **/
    getNetworkWirelessSsidHotspot20(req: operations.GetNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidHotspot20Response>;
    /**
     * getNetworkWirelessSsidIdentityPsk - Return an Identity PSK
     *
     * Return an Identity PSK
    **/
    getNetworkWirelessSsidIdentityPsk(req: operations.GetNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPskResponse>;
    /**
     * getNetworkWirelessSsidIdentityPsks - List all Identity PSKs in a wireless network
     *
     * List all Identity PSKs in a wireless network
    **/
    getNetworkWirelessSsidIdentityPsks(req: operations.GetNetworkWirelessSsidIdentityPsksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPsksResponse>;
    /**
     * getNetworkWirelessSsidSchedules - List the outage schedule for the SSID
     *
     * List the outage schedule for the SSID
    **/
    getNetworkWirelessSsidSchedules(req: operations.GetNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSchedulesResponse>;
    /**
     * getNetworkWirelessSsidSplashSettings - Display the splash page settings for the given SSID
     *
     * Display the splash page settings for the given SSID
    **/
    getNetworkWirelessSsidSplashSettings(req: operations.GetNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * getNetworkWirelessSsidTrafficShapingRules - Display the traffic shaping settings for a SSID on an MR network
     *
     * Display the traffic shaping settings for a SSID on an MR network
    **/
    getNetworkWirelessSsidTrafficShapingRules(req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * getNetworkWirelessSsidVpn - List the VPN settings for the SSID.
     *
     * List the VPN settings for the SSID.
    **/
    getNetworkWirelessSsidVpn(req: operations.GetNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidVpnResponse>;
    /**
     * getNetworkWirelessSsids - List the MR SSIDs in a network
     *
     * List the MR SSIDs in a network
    **/
    getNetworkWirelessSsids(req: operations.GetNetworkWirelessSsidsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidsResponse>;
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
     * getOrganizationApplianceSecurityIntrusion - Returns all supported intrusion settings for an organization
     *
     * Returns all supported intrusion settings for an organization
    **/
    getOrganizationApplianceSecurityIntrusion(req: operations.GetOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityIntrusionResponse>;
    /**
     * getOrganizationApplianceVpnThirdPartyVpnPeers - Return the third party VPN peers for an organization
     *
     * Return the third party VPN peers for an organization
    **/
    getOrganizationApplianceVpnThirdPartyVpnPeers(req: operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse>;
    /**
     * getOrganizationApplianceVpnVpnFirewallRules - Return the firewall rules for an organization's site-to-site VPN
     *
     * Return the firewall rules for an organization's site-to-site VPN
    **/
    getOrganizationApplianceVpnVpnFirewallRules(req: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse>;
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
     * getOrganizationCameraOnboardingStatuses - Fetch onboarding status of cameras
     *
     * Fetch onboarding status of cameras
    **/
    getOrganizationCameraOnboardingStatuses(req: operations.GetOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse>;
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
     * getOrganizationDevices - List the devices in an organization
     *
     * List the devices in an organization
    **/
    getOrganizationDevices(req: operations.GetOrganizationDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesResponse>;
    /**
     * getOrganizationInsightApplications - List all Insight tracked applications
     *
     * List all Insight tracked applications
    **/
    getOrganizationInsightApplications(req: operations.GetOrganizationInsightApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightApplicationsResponse>;
    /**
     * getOrganizationInsightMonitoredMediaServer - Return a monitored media server for this organization
     *
     * Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
    **/
    getOrganizationInsightMonitoredMediaServer(req: operations.GetOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightMonitoredMediaServerResponse>;
    /**
     * getOrganizationInsightMonitoredMediaServers - List the monitored media servers for this organization
     *
     * List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
    **/
    getOrganizationInsightMonitoredMediaServers(req: operations.GetOrganizationInsightMonitoredMediaServersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightMonitoredMediaServersResponse>;
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
     * getOrganizationSmApnsCert - Get the organization's APNS certificate
     *
     * Get the organization's APNS certificate
    **/
    getOrganizationSmApnsCert(req: operations.GetOrganizationSmApnsCertRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmApnsCertResponse>;
    /**
     * getOrganizationSmVppAccount - Get a hash containing the unparsed token of the VPP account with the given ID
     *
     * Get a hash containing the unparsed token of the VPP account with the given ID
    **/
    getOrganizationSmVppAccount(req: operations.GetOrganizationSmVppAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmVppAccountResponse>;
    /**
     * getOrganizationSmVppAccounts - List the VPP accounts in the organization
     *
     * List the VPP accounts in the organization
    **/
    getOrganizationSmVppAccounts(req: operations.GetOrganizationSmVppAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmVppAccountsResponse>;
    /**
     * getOrganizationSnmp - Return the SNMP settings for an organization
     *
     * Return the SNMP settings for an organization
    **/
    getOrganizationSnmp(req: operations.GetOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSnmpResponse>;
    /**
     * getOrganizations - List the organizations that the user has privileges on
     *
     * List the organizations that the user has privileges on
    **/
    getOrganizations(config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * lockNetworkSmDevices - Lock a set of devices
     *
     * Lock a set of devices
    **/
    lockNetworkSmDevices(req: operations.LockNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.LockNetworkSmDevicesResponse>;
    /**
     * modifyNetworkSmDevicesTags - Add, delete, or update the tags of a set of devices
     *
     * Add, delete, or update the tags of a set of devices
    **/
    modifyNetworkSmDevicesTags(req: operations.ModifyNetworkSmDevicesTagsRequest, config?: AxiosRequestConfig): Promise<operations.ModifyNetworkSmDevicesTagsResponse>;
    /**
     * moveNetworkSmDevices - Move a set of devices to a new network
     *
     * Move a set of devices to a new network
    **/
    moveNetworkSmDevices(req: operations.MoveNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.MoveNetworkSmDevicesResponse>;
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
     * provisionNetworkClients - Provisions a client with a name and policy
     *
     * Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
    **/
    provisionNetworkClients(req: operations.ProvisionNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionNetworkClientsResponse>;
    /**
     * refreshNetworkSmDeviceDetails - Refresh the details of a device
     *
     * Refresh the details of a device
    **/
    refreshNetworkSmDeviceDetails(req: operations.RefreshNetworkSmDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.RefreshNetworkSmDeviceDetailsResponse>;
    /**
     * removeNetworkDevices - Remove a single device
     *
     * Remove a single device
    **/
    removeNetworkDevices(req: operations.RemoveNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkDevicesResponse>;
    /**
     * removeNetworkSwitchStack - Remove a switch from a stack
     *
     * Remove a switch from a stack
    **/
    removeNetworkSwitchStack(req: operations.RemoveNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkSwitchStackResponse>;
    /**
     * renewOrganizationLicensesSeats - Renew SM seats of a license
     *
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
    **/
    renewOrganizationLicensesSeats(req: operations.RenewOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.RenewOrganizationLicensesSeatsResponse>;
    /**
     * splitNetwork - Split a combined network into individual networks for each type of device
     *
     * Split a combined network into individual networks for each type of device
    **/
    splitNetwork(req: operations.SplitNetworkRequest, config?: AxiosRequestConfig): Promise<operations.SplitNetworkResponse>;
    /**
     * swapNetworkApplianceWarmSpare - Swap MX primary and warm spare appliances
     *
     * Swap MX primary and warm spare appliances
    **/
    swapNetworkApplianceWarmSpare(req: operations.SwapNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.SwapNetworkApplianceWarmSpareResponse>;
    /**
     * unbindNetwork - Unbind a network from a template.
     *
     * Unbind a network from a template.
    **/
    unbindNetwork(req: operations.UnbindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.UnbindNetworkResponse>;
    /**
     * unenrollNetworkSmDevice - Unenroll a device
     *
     * Unenroll a device
    **/
    unenrollNetworkSmDevice(req: operations.UnenrollNetworkSmDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UnenrollNetworkSmDeviceResponse>;
    /**
     * updateDevice - Update the attributes of a device
     *
     * Update the attributes of a device
    **/
    updateDevice(req: operations.UpdateDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceResponse>;
    /**
     * updateDeviceCameraQualityAndRetention - Update quality and retention settings for the given camera
     *
     * Update quality and retention settings for the given camera
    **/
    updateDeviceCameraQualityAndRetention(req: operations.UpdateDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraQualityAndRetentionResponse>;
    /**
     * updateDeviceCameraSense - Update sense settings for the given camera
     *
     * Update sense settings for the given camera
    **/
    updateDeviceCameraSense(req: operations.UpdateDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraSenseResponse>;
    /**
     * updateDeviceCameraVideoSettings - Update video settings for the given camera
     *
     * Update video settings for the given camera
    **/
    updateDeviceCameraVideoSettings(req: operations.UpdateDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraVideoSettingsResponse>;
    /**
     * updateDeviceCameraWirelessProfiles - Assign wireless profiles to the given camera
     *
     * Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
    **/
    updateDeviceCameraWirelessProfiles(req: operations.UpdateDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraWirelessProfilesResponse>;
    /**
     * updateDeviceCellularGatewayLan - Update the LAN Settings for a single MG.
     *
     * Update the LAN Settings for a single MG.
    **/
    updateDeviceCellularGatewayLan(req: operations.UpdateDeviceCellularGatewayLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewayLanResponse>;
    /**
     * updateDeviceCellularGatewayPortForwardingRules - Updates the port forwarding rules for a single MG.
     *
     * Updates the port forwarding rules for a single MG.
    **/
    updateDeviceCellularGatewayPortForwardingRules(req: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse>;
    /**
     * updateDeviceManagementInterface - Update the management interface settings for a device
     *
     * Update the management interface settings for a device
    **/
    updateDeviceManagementInterface(req: operations.UpdateDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceManagementInterfaceResponse>;
    /**
     * updateDeviceSwitchPort - Update a switch port
     *
     * Update a switch port
    **/
    updateDeviceSwitchPort(req: operations.UpdateDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchPortResponse>;
    /**
     * updateDeviceSwitchRoutingInterface - Update a layer 3 interface for a switch
     *
     * Update a layer 3 interface for a switch
    **/
    updateDeviceSwitchRoutingInterface(req: operations.UpdateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * updateDeviceSwitchRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch
     *
     * Update a layer 3 interface DHCP configuration for a switch
    **/
    updateDeviceSwitchRoutingInterfaceDhcp(req: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * updateDeviceSwitchRoutingStaticRoute - Update a layer 3 static route for a switch
     *
     * Update a layer 3 static route for a switch
    **/
    updateDeviceSwitchRoutingStaticRoute(req: operations.UpdateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * updateDeviceSwitchWarmSpare - Update warm spare configuration for a switch
     *
     * Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
    **/
    updateDeviceSwitchWarmSpare(req: operations.UpdateDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchWarmSpareResponse>;
    /**
     * updateDeviceWirelessBluetoothSettings - Update the bluetooth settings for a wireless device
     *
     * Update the bluetooth settings for a wireless device
    **/
    updateDeviceWirelessBluetoothSettings(req: operations.UpdateDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse>;
    /**
     * updateDeviceWirelessRadioSettings - Update the radio settings of a device
     *
     * Update the radio settings of a device
    **/
    updateDeviceWirelessRadioSettings(req: operations.UpdateDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessRadioSettingsResponse>;
    /**
     * updateNetwork - Update a network
     *
     * Update a network
    **/
    updateNetwork(req: operations.UpdateNetworkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkResponse>;
    /**
     * updateNetworkAlertsSettings - Update the alert configuration for this network
     *
     * Update the alert configuration for this network
    **/
    updateNetworkAlertsSettings(req: operations.UpdateNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAlertsSettingsResponse>;
    /**
     * updateNetworkApplianceConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MX network
     *
     * Update the connectivity testing destinations for an MX network
    **/
    updateNetworkApplianceConnectivityMonitoringDestinations(req: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * updateNetworkApplianceContentFiltering - Update the content filtering settings for an MX network
     *
     * Update the content filtering settings for an MX network
    **/
    updateNetworkApplianceContentFiltering(req: operations.UpdateNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceContentFilteringResponse>;
    /**
     * updateNetworkApplianceFirewallCellularFirewallRules - Update the cellular firewall rules of an MX network
     *
     * Update the cellular firewall rules of an MX network
    **/
    updateNetworkApplianceFirewallCellularFirewallRules(req: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallFirewalledService - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     *
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
    **/
    updateNetworkApplianceFirewallFirewalledService(req: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * updateNetworkApplianceFirewallInboundFirewallRules - Update the inbound firewall rules of an MX network
     *
     * Update the inbound firewall rules of an MX network
    **/
    updateNetworkApplianceFirewallInboundFirewallRules(req: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallL3FirewallRules - Update the L3 firewall rules of an MX network
     *
     * Update the L3 firewall rules of an MX network
    **/
    updateNetworkApplianceFirewallL3FirewallRules(req: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallL7FirewallRules - Update the MX L7 firewall rules for an MX network
     *
     * Update the MX L7 firewall rules for an MX network
    **/
    updateNetworkApplianceFirewallL7FirewallRules(req: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallOneToManyNatRules - Set the 1:Many NAT mapping rules for an MX network
     *
     * Set the 1:Many NAT mapping rules for an MX network
    **/
    updateNetworkApplianceFirewallOneToManyNatRules(req: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * updateNetworkApplianceFirewallOneToOneNatRules - Set the 1:1 NAT mapping rules for an MX network
     *
     * Set the 1:1 NAT mapping rules for an MX network
    **/
    updateNetworkApplianceFirewallOneToOneNatRules(req: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * updateNetworkApplianceFirewallPortForwardingRules - Update the port forwarding rules for an MX network
     *
     * Update the port forwarding rules for an MX network
    **/
    updateNetworkApplianceFirewallPortForwardingRules(req: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse>;
    /**
     * updateNetworkAppliancePort - Update the per-port VLAN settings for a single MX port.
     *
     * Update the per-port VLAN settings for a single MX port.
    **/
    updateNetworkAppliancePort(req: operations.UpdateNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePortResponse>;
    /**
     * updateNetworkApplianceSecurityIntrusion - Set the supported intrusion settings for an MX network
     *
     * Set the supported intrusion settings for an MX network
    **/
    updateNetworkApplianceSecurityIntrusion(req: operations.UpdateNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityIntrusionResponse>;
    /**
     * updateNetworkApplianceSecurityMalware - Set the supported malware settings for an MX network
     *
     * Set the supported malware settings for an MX network
    **/
    updateNetworkApplianceSecurityMalware(req: operations.UpdateNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityMalwareResponse>;
    /**
     * updateNetworkApplianceSingleLan - Update single LAN configuration
     *
     * Update single LAN configuration
    **/
    updateNetworkApplianceSingleLan(req: operations.UpdateNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSingleLanResponse>;
    /**
     * updateNetworkApplianceStaticRoute - Update a static route for an MX or teleworker network
     *
     * Update a static route for an MX or teleworker network
    **/
    updateNetworkApplianceStaticRoute(req: operations.UpdateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceStaticRouteResponse>;
    /**
     * updateNetworkApplianceTrafficShaping - Update the traffic shaping settings for an MX network
     *
     * Update the traffic shaping settings for an MX network
    **/
    updateNetworkApplianceTrafficShaping(req: operations.UpdateNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingResponse>;
    /**
     * updateNetworkApplianceTrafficShapingCustomPerformanceClass - Update a custom performance class for an MX network
     *
     * Update a custom performance class for an MX network
    **/
    updateNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * updateNetworkApplianceTrafficShapingRules - Update the traffic shaping settings rules for an MX network
     *
     * Update the traffic shaping settings rules for an MX network
    **/
    updateNetworkApplianceTrafficShapingRules(req: operations.UpdateNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * updateNetworkApplianceTrafficShapingUplinkBandwidth - Updates the uplink bandwidth settings for your MX network.
     *
     * Updates the uplink bandwidth settings for your MX network.
    **/
    updateNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * updateNetworkApplianceTrafficShapingUplinkSelection - Update uplink selection settings for an MX network
     *
     * Update uplink selection settings for an MX network
    **/
    updateNetworkApplianceTrafficShapingUplinkSelection(req: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * updateNetworkApplianceVlan - Update a VLAN
     *
     * Update a VLAN
    **/
    updateNetworkApplianceVlan(req: operations.UpdateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlanResponse>;
    /**
     * updateNetworkApplianceVlansSettings - Enable/Disable VLANs for the given network
     *
     * Enable/Disable VLANs for the given network
    **/
    updateNetworkApplianceVlansSettings(req: operations.UpdateNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlansSettingsResponse>;
    /**
     * updateNetworkApplianceVpnBgp - Update a Hub BGP Configuration
     *
     * Update a Hub BGP Configuration
    **/
    updateNetworkApplianceVpnBgp(req: operations.UpdateNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnBgpResponse>;
    /**
     * updateNetworkApplianceVpnSiteToSiteVpn - Update the site-to-site VPN settings of a network
     *
     * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
    **/
    updateNetworkApplianceVpnSiteToSiteVpn(req: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * updateNetworkApplianceWarmSpare - Update MX warm spare settings
     *
     * Update MX warm spare settings
    **/
    updateNetworkApplianceWarmSpare(req: operations.UpdateNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceWarmSpareResponse>;
    /**
     * updateNetworkCameraQualityRetentionProfile - Update an existing quality retention profile for this network.
     *
     * Update an existing quality retention profile for this network.
    **/
    updateNetworkCameraQualityRetentionProfile(req: operations.UpdateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraQualityRetentionProfileResponse>;
    /**
     * updateNetworkCameraWirelessProfile - Update an existing camera wireless profile in this network.
     *
     * Update an existing camera wireless profile in this network.
    **/
    updateNetworkCameraWirelessProfile(req: operations.UpdateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraWirelessProfileResponse>;
    /**
     * updateNetworkCellularGatewayConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MG network
     *
     * Update the connectivity testing destinations for an MG network
    **/
    updateNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
    /**
     * updateNetworkCellularGatewayDhcp - Update common DHCP settings of MGs
     *
     * Update common DHCP settings of MGs
    **/
    updateNetworkCellularGatewayDhcp(req: operations.UpdateNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayDhcpResponse>;
    /**
     * updateNetworkCellularGatewaySubnetPool - Update the subnet pool and mask configuration for MGs in the network.
     *
     * Update the subnet pool and mask configuration for MGs in the network.
    **/
    updateNetworkCellularGatewaySubnetPool(req: operations.UpdateNetworkCellularGatewaySubnetPoolRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewaySubnetPoolResponse>;
    /**
     * updateNetworkCellularGatewayUplink - Updates the uplink settings for your MG network.
     *
     * Updates the uplink settings for your MG network.
    **/
    updateNetworkCellularGatewayUplink(req: operations.UpdateNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayUplinkResponse>;
    /**
     * updateNetworkClientPolicy - Update the policy assigned to a client on the network
     *
     * Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    updateNetworkClientPolicy(req: operations.UpdateNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientPolicyResponse>;
    /**
     * updateNetworkClientSplashAuthorizationStatus - Update a client's splash authorization
     *
     * Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    updateNetworkClientSplashAuthorizationStatus(req: operations.UpdateNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientSplashAuthorizationStatusResponse>;
    /**
     * updateNetworkFirmwareUpgrades - Update firmware upgrade information for a network
     *
     * Update firmware upgrade information for a network
    **/
    updateNetworkFirmwareUpgrades(req: operations.UpdateNetworkFirmwareUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesResponse>;
    /**
     * updateNetworkFloorPlan - Update a floor plan's geolocation and other meta data
     *
     * Update a floor plan's geolocation and other meta data
    **/
    updateNetworkFloorPlan(req: operations.UpdateNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFloorPlanResponse>;
    /**
     * updateNetworkGroupPolicy - Update a group policy
     *
     * Update a group policy
    **/
    updateNetworkGroupPolicy(req: operations.UpdateNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkGroupPolicyResponse>;
    /**
     * updateNetworkMerakiAuthUser - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
     *
     * Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
    **/
    updateNetworkMerakiAuthUser(req: operations.UpdateNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkMerakiAuthUserResponse>;
    /**
     * updateNetworkMqttBroker - Update an MQTT broker
     *
     * Update an MQTT broker
    **/
    updateNetworkMqttBroker(req: operations.UpdateNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkMqttBrokerResponse>;
    /**
     * updateNetworkNetflow - Update the NetFlow traffic reporting settings for a network
     *
     * Update the NetFlow traffic reporting settings for a network
    **/
    updateNetworkNetflow(req: operations.UpdateNetworkNetflowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkNetflowResponse>;
    /**
     * updateNetworkSettings - Update the settings for a network
     *
     * Update the settings for a network
    **/
    updateNetworkSettings(req: operations.UpdateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSettingsResponse>;
    /**
     * updateNetworkSmDevicesFields - Modify the fields of a device
     *
     * Modify the fields of a device
    **/
    updateNetworkSmDevicesFields(req: operations.UpdateNetworkSmDevicesFieldsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmDevicesFieldsResponse>;
    /**
     * updateNetworkSmTargetGroup - Update a target group
     *
     * Update a target group
    **/
    updateNetworkSmTargetGroup(req: operations.UpdateNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmTargetGroupResponse>;
    /**
     * updateNetworkSnmp - Update the SNMP settings for a network
     *
     * Update the SNMP settings for a network
    **/
    updateNetworkSnmp(req: operations.UpdateNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSnmpResponse>;
    /**
     * updateNetworkSwitchAccessControlLists - Update the access control lists for a MS network
     *
     * Update the access control lists for a MS network
    **/
    updateNetworkSwitchAccessControlLists(req: operations.UpdateNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessControlListsResponse>;
    /**
     * updateNetworkSwitchAccessPolicy - Update an access policy for a switch network
     *
     * Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
    **/
    updateNetworkSwitchAccessPolicy(req: operations.UpdateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessPolicyResponse>;
    /**
     * updateNetworkSwitchAlternateManagementInterface - Update the switch alternate management interface for the network
     *
     * Update the switch alternate management interface for the network
    **/
    updateNetworkSwitchAlternateManagementInterface(req: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * updateNetworkSwitchDhcpServerPolicy - Update the DHCP server policy
     *
     * Update the DHCP server policy
    **/
    updateNetworkSwitchDhcpServerPolicy(req: operations.UpdateNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * updateNetworkSwitchDscpToCosMappings - Update the DSCP to CoS mappings
     *
     * Update the DSCP to CoS mappings
    **/
    updateNetworkSwitchDscpToCosMappings(req: operations.UpdateNetworkSwitchDscpToCosMappingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDscpToCosMappingsResponse>;
    /**
     * updateNetworkSwitchLinkAggregation - Update a link aggregation group
     *
     * Update a link aggregation group
    **/
    updateNetworkSwitchLinkAggregation(req: operations.UpdateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchLinkAggregationResponse>;
    /**
     * updateNetworkSwitchMtu - Update the MTU configuration
     *
     * Update the MTU configuration
    **/
    updateNetworkSwitchMtu(req: operations.UpdateNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchMtuResponse>;
    /**
     * updateNetworkSwitchPortSchedule - Update a switch port schedule
     *
     * Update a switch port schedule
    **/
    updateNetworkSwitchPortSchedule(req: operations.UpdateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchPortScheduleResponse>;
    /**
     * updateNetworkSwitchQosRule - Update a quality of service rule
     *
     * Update a quality of service rule
    **/
    updateNetworkSwitchQosRule(req: operations.UpdateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRuleResponse>;
    /**
     * updateNetworkSwitchQosRulesOrder - Update the order in which the rules should be processed by the switch
     *
     * Update the order in which the rules should be processed by the switch
    **/
    updateNetworkSwitchQosRulesOrder(req: operations.UpdateNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRulesOrderResponse>;
    /**
     * updateNetworkSwitchRoutingMulticast - Update multicast settings for a network
     *
     * Update multicast settings for a network
    **/
    updateNetworkSwitchRoutingMulticast(req: operations.UpdateNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastResponse>;
    /**
     * updateNetworkSwitchRoutingMulticastRendezvousPoint - Update a multicast rendezvous point
     *
     * Update a multicast rendezvous point
    **/
    updateNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * updateNetworkSwitchRoutingOspf - Update layer 3 OSPF routing configuration
     *
     * Update layer 3 OSPF routing configuration
    **/
    updateNetworkSwitchRoutingOspf(req: operations.UpdateNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingOspfResponse>;
    /**
     * updateNetworkSwitchSettings - Update switch network settings
     *
     * Update switch network settings
    **/
    updateNetworkSwitchSettings(req: operations.UpdateNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsResponse>;
    /**
     * updateNetworkSwitchStackRoutingInterface - Update a layer 3 interface for a switch stack
     *
     * Update a layer 3 interface for a switch stack
    **/
    updateNetworkSwitchStackRoutingInterface(req: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * updateNetworkSwitchStackRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch stack
     *
     * Update a layer 3 interface DHCP configuration for a switch stack
    **/
    updateNetworkSwitchStackRoutingInterfaceDhcp(req: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * updateNetworkSwitchStackRoutingStaticRoute - Update a layer 3 static route for a switch stack
     *
     * Update a layer 3 static route for a switch stack
    **/
    updateNetworkSwitchStackRoutingStaticRoute(req: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * updateNetworkSwitchStormControl - Update the storm control configuration for a switch network
     *
     * Update the storm control configuration for a switch network
    **/
    updateNetworkSwitchStormControl(req: operations.UpdateNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStormControlResponse>;
    /**
     * updateNetworkSwitchStp - Updates STP settings
     *
     * Updates STP settings
    **/
    updateNetworkSwitchStp(req: operations.UpdateNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStpResponse>;
    /**
     * updateNetworkSyslogServers - Update the syslog servers for a network
     *
     * Update the syslog servers for a network
    **/
    updateNetworkSyslogServers(req: operations.UpdateNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSyslogServersResponse>;
    /**
     * updateNetworkTrafficAnalysis - Update the traffic analysis settings for a network
     *
     * Update the traffic analysis settings for a network
    **/
    updateNetworkTrafficAnalysis(req: operations.UpdateNetworkTrafficAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkTrafficAnalysisResponse>;
    /**
     * updateNetworkWebhooksHttpServer - Update an HTTP server
     *
     * Update an HTTP server
    **/
    updateNetworkWebhooksHttpServer(req: operations.UpdateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWebhooksHttpServerResponse>;
    /**
     * updateNetworkWirelessAlternateManagementInterface - Update alternate management interface and device static IP
     *
     * Update alternate management interface and device static IP
    **/
    updateNetworkWirelessAlternateManagementInterface(req: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * updateNetworkWirelessBilling - Update the billing settings
     *
     * Update the billing settings
    **/
    updateNetworkWirelessBilling(req: operations.UpdateNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBillingResponse>;
    /**
     * updateNetworkWirelessBluetoothSettings - Update the Bluetooth settings for a network
     *
     * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
    **/
    updateNetworkWirelessBluetoothSettings(req: operations.UpdateNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBluetoothSettingsResponse>;
    /**
     * updateNetworkWirelessRfProfile - Updates specified RF profile for this network
     *
     * Updates specified RF profile for this network
    **/
    updateNetworkWirelessRfProfile(req: operations.UpdateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessRfProfileResponse>;
    /**
     * updateNetworkWirelessSettings - Update the wireless settings for a network
     *
     * Update the wireless settings for a network
    **/
    updateNetworkWirelessSettings(req: operations.UpdateNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSettingsResponse>;
    /**
     * updateNetworkWirelessSsid - Update the attributes of an MR SSID
     *
     * Update the attributes of an MR SSID
    **/
    updateNetworkWirelessSsid(req: operations.UpdateNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidResponse>;
    /**
     * updateNetworkWirelessSsidBonjourForwarding - Update the bonjour forwarding setting and rules for the SSID
     *
     * Update the bonjour forwarding setting and rules for the SSID
    **/
    updateNetworkWirelessSsidBonjourForwarding(req: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * updateNetworkWirelessSsidDeviceTypeGroupPolicies - Update the device type group policies for the SSID
     *
     * Update the device type group policies for the SSID
    **/
    updateNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * updateNetworkWirelessSsidEapOverride - Update the EAP overridden parameters for an SSID.
     *
     * Update the EAP overridden parameters for an SSID.
    **/
    updateNetworkWirelessSsidEapOverride(req: operations.UpdateNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidEapOverrideResponse>;
    /**
     * updateNetworkWirelessSsidFirewallL3FirewallRules - Update the L3 firewall rules of an SSID on an MR network
     *
     * Update the L3 firewall rules of an SSID on an MR network
    **/
    updateNetworkWirelessSsidFirewallL3FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * updateNetworkWirelessSsidFirewallL7FirewallRules - Update the L7 firewall rules of an SSID on an MR network
     *
     * Update the L7 firewall rules of an SSID on an MR network
    **/
    updateNetworkWirelessSsidFirewallL7FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * updateNetworkWirelessSsidHotspot20 - Update the Hotspot 2.0 settings of an SSID
     *
     * Update the Hotspot 2.0 settings of an SSID
    **/
    updateNetworkWirelessSsidHotspot20(req: operations.UpdateNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidHotspot20Response>;
    /**
     * updateNetworkWirelessSsidIdentityPsk - Update an Identity PSK
     *
     * Update an Identity PSK
    **/
    updateNetworkWirelessSsidIdentityPsk(req: operations.UpdateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * updateNetworkWirelessSsidSchedules - Update the outage schedule for the SSID
     *
     * Update the outage schedule for the SSID
    **/
    updateNetworkWirelessSsidSchedules(req: operations.UpdateNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSchedulesResponse>;
    /**
     * updateNetworkWirelessSsidSplashSettings - Modify the splash page settings for the given SSID
     *
     * Modify the splash page settings for the given SSID
    **/
    updateNetworkWirelessSsidSplashSettings(req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * updateNetworkWirelessSsidTrafficShapingRules - Update the traffic shaping settings for an SSID on an MR network
     *
     * Update the traffic shaping settings for an SSID on an MR network
    **/
    updateNetworkWirelessSsidTrafficShapingRules(req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * updateNetworkWirelessSsidVpn - Update the VPN settings for the SSID
     *
     * Update the VPN settings for the SSID
    **/
    updateNetworkWirelessSsidVpn(req: operations.UpdateNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidVpnResponse>;
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
     * updateOrganizationApplianceSecurityIntrusion - Sets supported intrusion settings for an organization
     *
     * Sets supported intrusion settings for an organization
    **/
    updateOrganizationApplianceSecurityIntrusion(req: operations.UpdateOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceSecurityIntrusionResponse>;
    /**
     * updateOrganizationApplianceVpnThirdPartyVpnPeers - Update the third party VPN peers for an organization
     *
     * Update the third party VPN peers for an organization
    **/
    updateOrganizationApplianceVpnThirdPartyVpnPeers(req: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse>;
    /**
     * updateOrganizationApplianceVpnVpnFirewallRules - Update the firewall rules of an organization's site-to-site VPN
     *
     * Update the firewall rules of an organization's site-to-site VPN
    **/
    updateOrganizationApplianceVpnVpnFirewallRules(req: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse>;
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
     * updateOrganizationCameraOnboardingStatuses - Notify that credential handoff to camera has completed
     *
     * Notify that credential handoff to camera has completed
    **/
    updateOrganizationCameraOnboardingStatuses(req: operations.UpdateOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse>;
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
    /**
     * updateOrganizationInsightMonitoredMediaServer - Update a monitored media server for this organization
     *
     * Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
    **/
    updateOrganizationInsightMonitoredMediaServer(req: operations.UpdateOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationInsightMonitoredMediaServerResponse>;
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
    /**
     * wipeNetworkSmDevices - Wipe a device
     *
     * Wipe a device
    **/
    wipeNetworkSmDevices(req: operations.WipeNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.WipeNetworkSmDevicesResponse>;
}
