import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceGroupResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Instance = "INSTANCE",
    AwsElbLoadBalancer = "AWS_ELB_LOAD_BALANCER"
}


// ResourceGroup
/** 
 * The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
**/
export class ResourceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceGroupResourceTypeEnum;
}
