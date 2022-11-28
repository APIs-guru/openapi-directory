import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1ListConstraint } from "./googlecloudassetv1listconstraint";


export enum GoogleCloudAssetV1ConstraintConstraintDefaultEnum {
    ConstraintDefaultUnspecified = "CONSTRAINT_DEFAULT_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}


// GoogleCloudAssetV1Constraint
/** 
 * The definition of a constraint.
**/
export class GoogleCloudAssetV1Constraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanConstraint" })
  booleanConstraint?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=constraintDefault" })
  constraintDefault?: GoogleCloudAssetV1ConstraintConstraintDefaultEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=listConstraint" })
  listConstraint?: GoogleCloudAssetV1ListConstraint;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
