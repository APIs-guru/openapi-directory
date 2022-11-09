import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DropInfoCauseEnum {
    CauseUnspecified = "CAUSE_UNSPECIFIED"
,    UnknownExternalAddress = "UNKNOWN_EXTERNAL_ADDRESS"
,    ForeignIpDisallowed = "FOREIGN_IP_DISALLOWED"
,    FirewallRule = "FIREWALL_RULE"
,    NoRoute = "NO_ROUTE"
,    RouteBlackhole = "ROUTE_BLACKHOLE"
,    RouteWrongNetwork = "ROUTE_WRONG_NETWORK"
,    PrivateTrafficToInternet = "PRIVATE_TRAFFIC_TO_INTERNET"
,    PrivateGoogleAccessDisallowed = "PRIVATE_GOOGLE_ACCESS_DISALLOWED"
,    NoExternalAddress = "NO_EXTERNAL_ADDRESS"
,    UnknownInternalAddress = "UNKNOWN_INTERNAL_ADDRESS"
,    ForwardingRuleMismatch = "FORWARDING_RULE_MISMATCH"
,    ForwardingRuleNoInstances = "FORWARDING_RULE_NO_INSTANCES"
,    FirewallBlockingLoadBalancerBackendHealthCheck = "FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK"
,    InstanceNotRunning = "INSTANCE_NOT_RUNNING"
,    TrafficTypeBlocked = "TRAFFIC_TYPE_BLOCKED"
,    GkeMasterUnauthorizedAccess = "GKE_MASTER_UNAUTHORIZED_ACCESS"
,    CloudSqlInstanceUnauthorizedAccess = "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS"
,    DroppedInsideGkeService = "DROPPED_INSIDE_GKE_SERVICE"
,    DroppedInsideCloudSqlService = "DROPPED_INSIDE_CLOUD_SQL_SERVICE"
,    GoogleManagedServiceNoPeering = "GOOGLE_MANAGED_SERVICE_NO_PEERING"
,    CloudSqlInstanceNoIpAddress = "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS"
,    CloudFunctionNotActive = "CLOUD_FUNCTION_NOT_ACTIVE"
,    VpcConnectorNotSet = "VPC_CONNECTOR_NOT_SET"
,    VpcConnectorNotRunning = "VPC_CONNECTOR_NOT_RUNNING"
,    PscConnectionNotAccepted = "PSC_CONNECTION_NOT_ACCEPTED"
}


// DropInfo
/** 
 * Details of the final state "drop" and associated resource.
**/
export class DropInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: DropInfoCauseEnum;

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
