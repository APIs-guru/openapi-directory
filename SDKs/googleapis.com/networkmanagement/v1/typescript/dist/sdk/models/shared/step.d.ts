import { SpeakeasyBase } from "../../../internal/utils";
import { AbortInfo } from "./abortinfo";
import { CloudFunctionInfo } from "./cloudfunctioninfo";
import { CloudSqlInstanceInfo } from "./cloudsqlinstanceinfo";
import { DeliverInfo } from "./deliverinfo";
import { DropInfo } from "./dropinfo";
import { EndpointInfo } from "./endpointinfo";
import { FirewallInfo } from "./firewallinfo";
import { ForwardInfo } from "./forwardinfo";
import { ForwardingRuleInfo } from "./forwardingruleinfo";
import { GkeMasterInfo } from "./gkemasterinfo";
import { InstanceInfo } from "./instanceinfo";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { NetworkInfo } from "./networkinfo";
import { RouteInfo } from "./routeinfo";
import { VpcConnectorInfo } from "./vpcconnectorinfo";
import { VpnGatewayInfo } from "./vpngatewayinfo";
import { VpnTunnelInfo } from "./vpntunnelinfo";
export declare enum StepStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StartFromInstance = "START_FROM_INSTANCE",
    StartFromInternet = "START_FROM_INTERNET",
    StartFromPrivateNetwork = "START_FROM_PRIVATE_NETWORK",
    StartFromGkeMaster = "START_FROM_GKE_MASTER",
    StartFromCloudSqlInstance = "START_FROM_CLOUD_SQL_INSTANCE",
    StartFromCloudFunction = "START_FROM_CLOUD_FUNCTION",
    ApplyIngressFirewallRule = "APPLY_INGRESS_FIREWALL_RULE",
    ApplyEgressFirewallRule = "APPLY_EGRESS_FIREWALL_RULE",
    ApplyRoute = "APPLY_ROUTE",
    ApplyForwardingRule = "APPLY_FORWARDING_RULE",
    SpoofingApproved = "SPOOFING_APPROVED",
    ArriveAtInstance = "ARRIVE_AT_INSTANCE",
    ArriveAtInternalLoadBalancer = "ARRIVE_AT_INTERNAL_LOAD_BALANCER",
    ArriveAtExternalLoadBalancer = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER",
    ArriveAtVpnGateway = "ARRIVE_AT_VPN_GATEWAY",
    ArriveAtVpnTunnel = "ARRIVE_AT_VPN_TUNNEL",
    ArriveAtVpcConnector = "ARRIVE_AT_VPC_CONNECTOR",
    Nat = "NAT",
    ProxyConnection = "PROXY_CONNECTION",
    Deliver = "DELIVER",
    Drop = "DROP",
    Forward = "FORWARD",
    Abort = "ABORT",
    ViewerPermissionMissing = "VIEWER_PERMISSION_MISSING"
}
/**
 * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
**/
export declare class Step extends SpeakeasyBase {
    abort?: AbortInfo;
    causesDrop?: boolean;
    cloudFunction?: CloudFunctionInfo;
    cloudSqlInstance?: CloudSqlInstanceInfo;
    deliver?: DeliverInfo;
    description?: string;
    drop?: DropInfo;
    endpoint?: EndpointInfo;
    firewall?: FirewallInfo;
    forward?: ForwardInfo;
    forwardingRule?: ForwardingRuleInfo;
    gkeMaster?: GkeMasterInfo;
    instance?: InstanceInfo;
    loadBalancer?: LoadBalancerInfo;
    network?: NetworkInfo;
    projectId?: string;
    route?: RouteInfo;
    state?: StepStateEnum;
    vpcConnector?: VpcConnectorInfo;
    vpnGateway?: VpnGatewayInfo;
    vpnTunnel?: VpnTunnelInfo;
}
