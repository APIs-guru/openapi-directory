import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CloudRunConfigLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED"
,    LoadBalancerTypeExternal = "LOAD_BALANCER_TYPE_EXTERNAL"
,    LoadBalancerTypeInternal = "LOAD_BALANCER_TYPE_INTERNAL"
}


// CloudRunConfig
/** 
 * Configuration options for the Cloud Run feature.
**/
export class CloudRunConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=loadBalancerType" })
  loadBalancerType?: CloudRunConfigLoadBalancerTypeEnum;
}
