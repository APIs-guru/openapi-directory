package shared

type DropInfoCauseEnum string

const (
	DropInfoCauseEnumCauseUnspecified                                DropInfoCauseEnum = "CAUSE_UNSPECIFIED"
	DropInfoCauseEnumUnknownExternalAddress                          DropInfoCauseEnum = "UNKNOWN_EXTERNAL_ADDRESS"
	DropInfoCauseEnumForeignIPDisallowed                             DropInfoCauseEnum = "FOREIGN_IP_DISALLOWED"
	DropInfoCauseEnumFirewallRule                                    DropInfoCauseEnum = "FIREWALL_RULE"
	DropInfoCauseEnumNoRoute                                         DropInfoCauseEnum = "NO_ROUTE"
	DropInfoCauseEnumRouteBlackhole                                  DropInfoCauseEnum = "ROUTE_BLACKHOLE"
	DropInfoCauseEnumRouteWrongNetwork                               DropInfoCauseEnum = "ROUTE_WRONG_NETWORK"
	DropInfoCauseEnumPrivateTrafficToInternet                        DropInfoCauseEnum = "PRIVATE_TRAFFIC_TO_INTERNET"
	DropInfoCauseEnumPrivateGoogleAccessDisallowed                   DropInfoCauseEnum = "PRIVATE_GOOGLE_ACCESS_DISALLOWED"
	DropInfoCauseEnumNoExternalAddress                               DropInfoCauseEnum = "NO_EXTERNAL_ADDRESS"
	DropInfoCauseEnumUnknownInternalAddress                          DropInfoCauseEnum = "UNKNOWN_INTERNAL_ADDRESS"
	DropInfoCauseEnumForwardingRuleMismatch                          DropInfoCauseEnum = "FORWARDING_RULE_MISMATCH"
	DropInfoCauseEnumForwardingRuleNoInstances                       DropInfoCauseEnum = "FORWARDING_RULE_NO_INSTANCES"
	DropInfoCauseEnumFirewallBlockingLoadBalancerBackendHealthCheck  DropInfoCauseEnum = "FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK"
	DropInfoCauseEnumInstanceNotRunning                              DropInfoCauseEnum = "INSTANCE_NOT_RUNNING"
	DropInfoCauseEnumGkeClusterNotRunning                            DropInfoCauseEnum = "GKE_CLUSTER_NOT_RUNNING"
	DropInfoCauseEnumCloudSQLInstanceNotRunning                      DropInfoCauseEnum = "CLOUD_SQL_INSTANCE_NOT_RUNNING"
	DropInfoCauseEnumTrafficTypeBlocked                              DropInfoCauseEnum = "TRAFFIC_TYPE_BLOCKED"
	DropInfoCauseEnumGkeMasterUnauthorizedAccess                     DropInfoCauseEnum = "GKE_MASTER_UNAUTHORIZED_ACCESS"
	DropInfoCauseEnumCloudSQLInstanceUnauthorizedAccess              DropInfoCauseEnum = "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS"
	DropInfoCauseEnumDroppedInsideGkeService                         DropInfoCauseEnum = "DROPPED_INSIDE_GKE_SERVICE"
	DropInfoCauseEnumDroppedInsideCloudSQLService                    DropInfoCauseEnum = "DROPPED_INSIDE_CLOUD_SQL_SERVICE"
	DropInfoCauseEnumGoogleManagedServiceNoPeering                   DropInfoCauseEnum = "GOOGLE_MANAGED_SERVICE_NO_PEERING"
	DropInfoCauseEnumCloudSQLInstanceNoIPAddress                     DropInfoCauseEnum = "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS"
	DropInfoCauseEnumGkeControlPlaneRegionMismatch                   DropInfoCauseEnum = "GKE_CONTROL_PLANE_REGION_MISMATCH"
	DropInfoCauseEnumPublicGkeControlPlaneToPrivateDestination       DropInfoCauseEnum = "PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION"
	DropInfoCauseEnumGkeControlPlaneNoRoute                          DropInfoCauseEnum = "GKE_CONTROL_PLANE_NO_ROUTE"
	DropInfoCauseEnumCloudSQLInstanceNotConfiguredForExternalTraffic DropInfoCauseEnum = "CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC"
	DropInfoCauseEnumPublicCloudSQLInstanceToPrivateDestination      DropInfoCauseEnum = "PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION"
	DropInfoCauseEnumCloudSQLInstanceNoRoute                         DropInfoCauseEnum = "CLOUD_SQL_INSTANCE_NO_ROUTE"
	DropInfoCauseEnumCloudFunctionNotActive                          DropInfoCauseEnum = "CLOUD_FUNCTION_NOT_ACTIVE"
	DropInfoCauseEnumVpcConnectorNotSet                              DropInfoCauseEnum = "VPC_CONNECTOR_NOT_SET"
	DropInfoCauseEnumVpcConnectorNotRunning                          DropInfoCauseEnum = "VPC_CONNECTOR_NOT_RUNNING"
	DropInfoCauseEnumForwardingRuleRegionMismatch                    DropInfoCauseEnum = "FORWARDING_RULE_REGION_MISMATCH"
	DropInfoCauseEnumPscConnectionNotAccepted                        DropInfoCauseEnum = "PSC_CONNECTION_NOT_ACCEPTED"
)

type DropInfo struct {
	Cause       *DropInfoCauseEnum `json:"cause"`
	ResourceURI *string            `json:"resourceUri"`
}
