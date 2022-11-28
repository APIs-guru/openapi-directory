import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResourceGroupResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Instance = "INSTANCE",
    AwsElbLoadBalancer = "AWS_ELB_LOAD_BALANCER"
}
/**
 * The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
**/
export declare class ResourceGroup extends SpeakeasyBase {
    groupId?: string;
    resourceType?: ResourceGroupResourceTypeEnum;
}
