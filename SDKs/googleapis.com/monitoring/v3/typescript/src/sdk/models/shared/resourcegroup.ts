import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ResourceGroupResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED"
,    Instance = "INSTANCE"
,    AwsElbLoadBalancer = "AWS_ELB_LOAD_BALANCER"
}


// ResourceGroup
/** 
 * The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
**/
export class ResourceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceGroupResourceTypeEnum;
}
