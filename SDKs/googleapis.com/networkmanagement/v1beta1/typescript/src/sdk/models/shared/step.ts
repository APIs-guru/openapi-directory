import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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

export enum StepStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    StartFromInstance = "START_FROM_INSTANCE"
,    StartFromInternet = "START_FROM_INTERNET"
,    StartFromPrivateNetwork = "START_FROM_PRIVATE_NETWORK"
,    StartFromGkeMaster = "START_FROM_GKE_MASTER"
,    StartFromCloudSqlInstance = "START_FROM_CLOUD_SQL_INSTANCE"
,    StartFromCloudFunction = "START_FROM_CLOUD_FUNCTION"
,    ApplyIngressFirewallRule = "APPLY_INGRESS_FIREWALL_RULE"
,    ApplyEgressFirewallRule = "APPLY_EGRESS_FIREWALL_RULE"
,    ApplyRoute = "APPLY_ROUTE"
,    ApplyForwardingRule = "APPLY_FORWARDING_RULE"
,    SpoofingApproved = "SPOOFING_APPROVED"
,    ArriveAtInstance = "ARRIVE_AT_INSTANCE"
,    ArriveAtInternalLoadBalancer = "ARRIVE_AT_INTERNAL_LOAD_BALANCER"
,    ArriveAtExternalLoadBalancer = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER"
,    ArriveAtVpnGateway = "ARRIVE_AT_VPN_GATEWAY"
,    ArriveAtVpnTunnel = "ARRIVE_AT_VPN_TUNNEL"
,    ArriveAtVpcConnector = "ARRIVE_AT_VPC_CONNECTOR"
,    Nat = "NAT"
,    ProxyConnection = "PROXY_CONNECTION"
,    Deliver = "DELIVER"
,    Drop = "DROP"
,    Forward = "FORWARD"
,    Abort = "ABORT"
,    ViewerPermissionMissing = "VIEWER_PERMISSION_MISSING"
}


// Step
/** 
 * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
**/
export class Step extends SpeakeasyBase {
  @Metadata({ data: "json, name=abort" })
  abort?: AbortInfo;

  @Metadata({ data: "json, name=causesDrop" })
  causesDrop?: boolean;

  @Metadata({ data: "json, name=cloudFunction" })
  cloudFunction?: CloudFunctionInfo;

  @Metadata({ data: "json, name=cloudSqlInstance" })
  cloudSqlInstance?: CloudSqlInstanceInfo;

  @Metadata({ data: "json, name=deliver" })
  deliver?: DeliverInfo;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=drop" })
  drop?: DropInfo;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: EndpointInfo;

  @Metadata({ data: "json, name=firewall" })
  firewall?: FirewallInfo;

  @Metadata({ data: "json, name=forward" })
  forward?: ForwardInfo;

  @Metadata({ data: "json, name=forwardingRule" })
  forwardingRule?: ForwardingRuleInfo;

  @Metadata({ data: "json, name=gkeMaster" })
  gkeMaster?: GkeMasterInfo;

  @Metadata({ data: "json, name=instance" })
  instance?: InstanceInfo;

  @Metadata({ data: "json, name=loadBalancer" })
  loadBalancer?: LoadBalancerInfo;

  @Metadata({ data: "json, name=network" })
  network?: NetworkInfo;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=route" })
  route?: RouteInfo;

  @Metadata({ data: "json, name=state" })
  state?: StepStateEnum;

  @Metadata({ data: "json, name=vpcConnector" })
  vpcConnector?: VpcConnectorInfo;

  @Metadata({ data: "json, name=vpnGateway" })
  vpnGateway?: VpnGatewayInfo;

  @Metadata({ data: "json, name=vpnTunnel" })
  vpnTunnel?: VpnTunnelInfo;
}
