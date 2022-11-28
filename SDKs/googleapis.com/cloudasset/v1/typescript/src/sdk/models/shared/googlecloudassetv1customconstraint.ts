import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudAssetV1CustomConstraintActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}

export enum GoogleCloudAssetV1CustomConstraintMethodTypesEnum {
    MethodTypeUnspecified = "METHOD_TYPE_UNSPECIFIED",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}


// GoogleCloudAssetV1CustomConstraint
/** 
 * The definition of a custom constraint.
**/
export class GoogleCloudAssetV1CustomConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: GoogleCloudAssetV1CustomConstraintActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=methodTypes" })
  methodTypes?: GoogleCloudAssetV1CustomConstraintMethodTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceTypes" })
  resourceTypes?: string[];
}
