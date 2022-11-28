import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum {
    Undefined = "UNDEFINED",
    Tcp = "TCP",
    Udp = "UDP"
}
export declare enum RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum {
    None = "NONE",
    RegionalL4Ilb = "REGIONAL_L4ILB"
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
