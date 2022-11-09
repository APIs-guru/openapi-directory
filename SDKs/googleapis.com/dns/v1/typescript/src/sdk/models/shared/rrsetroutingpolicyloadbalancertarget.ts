import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum {
    Undefined = "undefined"
,    Tcp = "tcp"
,    Udp = "udp"
}

export enum RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum {
    None = "none"
,    RegionalL4ilb = "regionalL4ilb"
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
