import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectiveIamPolicy } from "./effectiveiampolicy";



// BatchGetEffectiveIamPoliciesResponse
/** 
 * A response message for AssetService.BatchGetEffectiveIamPolicies.
**/
export class BatchGetEffectiveIamPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyResults", elemType: EffectiveIamPolicy })
  policyResults?: EffectiveIamPolicy[];
}
