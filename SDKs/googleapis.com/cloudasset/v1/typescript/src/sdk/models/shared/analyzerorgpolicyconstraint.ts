import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1CustomConstraint } from "./googlecloudassetv1customconstraint";
import { GoogleCloudAssetV1Constraint } from "./googlecloudassetv1constraint";



// AnalyzerOrgPolicyConstraint
/** 
 * The organization policy constraint definition.
**/
export class AnalyzerOrgPolicyConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customConstraint" })
  customConstraint?: GoogleCloudAssetV1CustomConstraint;

  @SpeakeasyMetadata({ data: "json, name=googleDefinedConstraint" })
  googleDefinedConstraint?: GoogleCloudAssetV1Constraint;
}
