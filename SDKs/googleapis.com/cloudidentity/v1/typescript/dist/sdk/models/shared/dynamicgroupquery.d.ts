import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DynamicGroupQueryResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    User = "USER"
}
/**
 * Defines a query on a resource.
**/
export declare class DynamicGroupQuery extends SpeakeasyBase {
    query?: string;
    resourceType?: DynamicGroupQueryResourceTypeEnum;
}
