import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Networks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bindNetwork - Bind a network to a template.
     *
     * Bind a network to a template.
    **/
    bindNetwork(req: operations.BindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.BindNetworkResponse>;
    /**
     * claimNetworkDevices - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     *
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
    **/
    claimNetworkDevices(req: operations.ClaimNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ClaimNetworkDevicesResponse>;
    /**
     * combineOrganizationNetworks - Combine multiple networks into a single network
     *
     * Combine multiple networks into a single network
    **/
    combineOrganizationNetworks(req: operations.CombineOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.CombineOrganizationNetworksResponse>;
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
     * createOrganizationNetwork - Create a network
     *
     * Create a network
    **/
    createOrganizationNetwork(req: operations.CreateOrganizationNetworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationNetworkResponse>;
    /**
     * deleteNetwork - Delete a network
     *
     * Delete a network
    **/
    deleteNetwork(req: operations.DeleteNetworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkResponse>;
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
     * deleteNetworkWebhooksHttpServer - Delete an HTTP server from a network
     *
     * Delete an HTTP server from a network
    **/
    deleteNetworkWebhooksHttpServer(req: operations.DeleteNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWebhooksHttpServerResponse>;
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
     * getNetworkBluetoothClient - Return a Bluetooth client
     *
     * Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
    **/
    getNetworkBluetoothClient(req: operations.GetNetworkBluetoothClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientResponse>;
    /**
     * getNetworkBluetoothClients - List the Bluetooth clients seen by APs in this network
     *
     * List the Bluetooth clients seen by APs in this network
    **/
    getNetworkBluetoothClients(req: operations.GetNetworkBluetoothClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientsResponse>;
    /**
     * getNetworkClient - Return the client associated with the given identifier
     *
     * Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClient(req: operations.GetNetworkClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientResponse>;
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
     * getNetworkClientTrafficHistory - Return the client's network traffic data over time
     *
     * Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientTrafficHistory(req: operations.GetNetworkClientTrafficHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientTrafficHistoryResponse>;
    /**
     * getNetworkClientUsageHistory - Return the client's daily usage history
     *
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientUsageHistory(req: operations.GetNetworkClientUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientUsageHistoryResponse>;
    /**
     * getNetworkClients - List the clients that have used this network in the timespan
     *
     * List the clients that have used this network in the timespan
    **/
    getNetworkClients(req: operations.GetNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsResponse>;
    /**
     * getNetworkClientsApplicationUsage - Return the application usage data for clients
     *
     * Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientsApplicationUsage(req: operations.GetNetworkClientsApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsApplicationUsageResponse>;
    /**
     * getNetworkClientsOverview - Return overview statistics for network clients
     *
     * Return overview statistics for network clients
    **/
    getNetworkClientsOverview(req: operations.GetNetworkClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsOverviewResponse>;
    /**
     * getNetworkClientsUsageHistories - Return the usage histories for clients
     *
     * Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientsUsageHistories(req: operations.GetNetworkClientsUsageHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsUsageHistoriesResponse>;
    /**
     * getNetworkDevices - List the devices in a network
     *
     * List the devices in a network
    **/
    getNetworkDevices(req: operations.GetNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesResponse>;
    /**
     * getNetworkEvents - List the events for the network
     *
     * List the events for the network
    **/
    getNetworkEvents(req: operations.GetNetworkEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsResponse>;
    /**
     * getNetworkEventsEventTypes - List the event type to human-readable description
     *
     * List the event type to human-readable description
    **/
    getNetworkEventsEventTypes(req: operations.GetNetworkEventsEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsEventTypesResponse>;
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
     * getNetworkNetworkHealthChannelUtilization - Get the channel utilization over each radio for all APs in a network.
     *
     * Get the channel utilization over each radio for all APs in a network.
    **/
    getNetworkNetworkHealthChannelUtilization(req: operations.GetNetworkNetworkHealthChannelUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetworkHealthChannelUtilizationResponse>;
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
     * getNetworkSnmp - Return the SNMP settings for a network
     *
     * Return the SNMP settings for a network
    **/
    getNetworkSnmp(req: operations.GetNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSnmpResponse>;
    /**
     * getNetworkSplashLoginAttempts - List the splash login attempts for a network
     *
     * List the splash login attempts for a network
    **/
    getNetworkSplashLoginAttempts(req: operations.GetNetworkSplashLoginAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSplashLoginAttemptsResponse>;
    /**
     * getNetworkSyslogServers - List the syslog servers for a network
     *
     * List the syslog servers for a network
    **/
    getNetworkSyslogServers(req: operations.GetNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSyslogServersResponse>;
    /**
     * getNetworkTraffic - Return the traffic analysis data for this network
     *
     * Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
    **/
    getNetworkTraffic(req: operations.GetNetworkTrafficRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficResponse>;
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
     * getOrganizationNetworks - List the networks that the user has privileges on in an organization
     *
     * List the networks that the user has privileges on in an organization
    **/
    getOrganizationNetworks(req: operations.GetOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationNetworksResponse>;
    /**
     * provisionNetworkClients - Provisions a client with a name and policy
     *
     * Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
    **/
    provisionNetworkClients(req: operations.ProvisionNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionNetworkClientsResponse>;
    /**
     * removeNetworkDevices - Remove a single device
     *
     * Remove a single device
    **/
    removeNetworkDevices(req: operations.RemoveNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkDevicesResponse>;
    /**
     * splitNetwork - Split a combined network into individual networks for each type of device
     *
     * Split a combined network into individual networks for each type of device
    **/
    splitNetwork(req: operations.SplitNetworkRequest, config?: AxiosRequestConfig): Promise<operations.SplitNetworkResponse>;
    /**
     * unbindNetwork - Unbind a network from a template.
     *
     * Unbind a network from a template.
    **/
    unbindNetwork(req: operations.UnbindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.UnbindNetworkResponse>;
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
     * updateNetworkSnmp - Update the SNMP settings for a network
     *
     * Update the SNMP settings for a network
    **/
    updateNetworkSnmp(req: operations.UpdateNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSnmpResponse>;
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
}
