import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
export declare enum GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum {
    MethodTypeUnspecified = "METHOD_TYPE_UNSPECIFIED",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}
/**
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
**/
export declare class GoogleCloudOrgpolicyV2CustomConstraint extends SpeakeasyBase {
    actionType?: GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;
    condition?: string;
    description?: string;
    displayName?: string;
    methodTypes?: GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[];
    name?: string;
    resourceTypes?: string[];
    updateTime?: string;
}
