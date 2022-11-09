import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EffectiveIamPolicy } from "./effectiveiampolicy";


// BatchGetEffectiveIamPoliciesResponse
/** 
 * A response message for AssetService.BatchGetEffectiveIamPolicies.
**/
export class BatchGetEffectiveIamPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyResults", elemType: shared.EffectiveIamPolicy })
  policyResults?: EffectiveIamPolicy[];
}
