import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CloudRunConfigLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED",
    LoadBalancerTypeExternal = "LOAD_BALANCER_TYPE_EXTERNAL",
    LoadBalancerTypeInternal = "LOAD_BALANCER_TYPE_INTERNAL"
}
/**
 * Configuration options for the Cloud Run feature.
**/
export declare class CloudRunConfig extends SpeakeasyBase {
    disabled?: boolean;
    loadBalancerType?: CloudRunConfigLoadBalancerTypeEnum;
}
