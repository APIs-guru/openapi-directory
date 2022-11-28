import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1ListConstraint } from "./googlecloudassetv1listconstraint";
export declare enum GoogleCloudAssetV1ConstraintConstraintDefaultEnum {
    ConstraintDefaultUnspecified = "CONSTRAINT_DEFAULT_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * The definition of a constraint.
**/
export declare class GoogleCloudAssetV1Constraint extends SpeakeasyBase {
    booleanConstraint?: Map<string, any>;
    constraintDefault?: GoogleCloudAssetV1ConstraintConstraintDefaultEnum;
    description?: string;
    displayName?: string;
    listConstraint?: GoogleCloudAssetV1ListConstraint;
    name?: string;
}
