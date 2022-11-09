import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED"
,    Allow = "ALLOW"
,    Deny = "DENY"
}

export enum GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum {
    MethodTypeUnspecified = "METHOD_TYPE_UNSPECIFIED"
,    Create = "CREATE"
,    Update = "UPDATE"
,    Delete = "DELETE"
}


// GoogleCloudOrgpolicyV2CustomConstraint
/** 
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
**/
export class GoogleCloudOrgpolicyV2CustomConstraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionType" })
  actionType?: GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=methodTypes" })
  methodTypes?: GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceTypes" })
  resourceTypes?: string[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
