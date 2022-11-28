import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}

export enum GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum {
    MethodTypeUnspecified = "METHOD_TYPE_UNSPECIFIED",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}


// GoogleCloudOrgpolicyV2CustomConstraint
/** 
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
**/
export class GoogleCloudOrgpolicyV2CustomConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=methodTypes" })
  methodTypes?: GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceTypes" })
  resourceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudOrgpolicyV2CustomConstraintInput
/** 
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
**/
export class GoogleCloudOrgpolicyV2CustomConstraintInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=methodTypes" })
  methodTypes?: GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceTypes" })
  resourceTypes?: string[];
}
