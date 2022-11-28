import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudAssetV1CustomConstraintActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
export declare enum GoogleCloudAssetV1CustomConstraintMethodTypesEnum {
    MethodTypeUnspecified = "METHOD_TYPE_UNSPECIFIED",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}
/**
 * The definition of a custom constraint.
**/
export declare class GoogleCloudAssetV1CustomConstraint extends SpeakeasyBase {
    actionType?: GoogleCloudAssetV1CustomConstraintActionTypeEnum;
    condition?: string;
    description?: string;
    displayName?: string;
    methodTypes?: GoogleCloudAssetV1CustomConstraintMethodTypesEnum[];
    name?: string;
    resourceTypes?: string[];
}
