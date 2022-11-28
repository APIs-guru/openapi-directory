import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum {
    Undefined = "undefined",
    Tcp = "tcp",
    Udp = "udp"
}

export enum RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum {
    None = "none",
    RegionalL4ilb = "regionalL4ilb"
}


export class RrSetRoutingPolicyLoadBalancerTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ipProtocol" })
  ipProtocol?: RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerType" })
  loadBalancerType?: RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=networkUrl" })
  networkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
