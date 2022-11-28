import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1CustomConstraint } from "./googlecloudassetv1customconstraint";
import { GoogleCloudAssetV1Constraint } from "./googlecloudassetv1constraint";
/**
 * The organization policy constraint definition.
**/
export declare class AnalyzerOrgPolicyConstraint extends SpeakeasyBase {
    customConstraint?: GoogleCloudAssetV1CustomConstraint;
    googleDefinedConstraint?: GoogleCloudAssetV1Constraint;
}
