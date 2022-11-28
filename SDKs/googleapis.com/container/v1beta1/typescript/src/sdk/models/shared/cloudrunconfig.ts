import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CloudRunConfigLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED",
    LoadBalancerTypeExternal = "LOAD_BALANCER_TYPE_EXTERNAL",
    LoadBalancerTypeInternal = "LOAD_BALANCER_TYPE_INTERNAL"
}


// CloudRunConfig
/** 
 * Configuration options for the Cloud Run feature.
**/
export class CloudRunConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerType" })
  loadBalancerType?: CloudRunConfigLoadBalancerTypeEnum;
}
