import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum {
    Undefined = "UNDEFINED"
,    Tcp = "TCP"
,    Udp = "UDP"
}

export enum RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum {
    None = "NONE"
,    RegionalL4Ilb = "REGIONAL_L4ILB"
}


export class RrSetRoutingPolicyLoadBalancerTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=ipProtocol" })
  ipProtocol?: RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=loadBalancerType" })
  loadBalancerType?: RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;

  @Metadata({ data: "json, name=networkUrl" })
  networkUrl?: string;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
