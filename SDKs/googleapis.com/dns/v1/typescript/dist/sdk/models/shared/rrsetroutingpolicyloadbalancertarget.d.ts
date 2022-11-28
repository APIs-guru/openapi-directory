import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum {
    Undefined = "undefined",
    Tcp = "tcp",
    Udp = "udp"
}
export declare enum RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum {
    None = "none",
    RegionalL4ilb = "regionalL4ilb"
}
export declare class RrSetRoutingPolicyLoadBalancerTarget extends SpeakeasyBase {
    ipAddress?: string;
    ipProtocol?: RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
    kind?: string;
    loadBalancerType?: RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
    networkUrl?: string;
    port?: string;
    project?: string;
    region?: string;
}
