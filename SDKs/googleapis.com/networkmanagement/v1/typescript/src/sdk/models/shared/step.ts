import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


// Step
/** 
 * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
**/
export class Step extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abort" })
  abort?: AbortInfo;

  @SpeakeasyMetadata({ data: "json, name=causesDrop" })
  causesDrop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloudFunction" })
  cloudFunction?: CloudFunctionInfo;

  @SpeakeasyMetadata({ data: "json, name=cloudSqlInstance" })
  cloudSqlInstance?: CloudSqlInstanceInfo;

  @SpeakeasyMetadata({ data: "json, name=deliver" })
  deliver?: DeliverInfo;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=drop" })
  drop?: DropInfo;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: EndpointInfo;

  @SpeakeasyMetadata({ data: "json, name=firewall" })
  firewall?: FirewallInfo;

  @SpeakeasyMetadata({ data: "json, name=forward" })
  forward?: ForwardInfo;

  @SpeakeasyMetadata({ data: "json, name=forwardingRule" })
  forwardingRule?: ForwardingRuleInfo;

  @SpeakeasyMetadata({ data: "json, name=gkeMaster" })
  gkeMaster?: GkeMasterInfo;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: InstanceInfo;

  @SpeakeasyMetadata({ data: "json, name=loadBalancer" })
  loadBalancer?: LoadBalancerInfo;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: NetworkInfo;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=route" })
  route?: RouteInfo;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StepStateEnum;

  @SpeakeasyMetadata({ data: "json, name=vpcConnector" })
  vpcConnector?: VpcConnectorInfo;

  @SpeakeasyMetadata({ data: "json, name=vpnGateway" })
  vpnGateway?: VpnGatewayInfo;

  @SpeakeasyMetadata({ data: "json, name=vpnTunnel" })
  vpnTunnel?: VpnTunnelInfo;
}
