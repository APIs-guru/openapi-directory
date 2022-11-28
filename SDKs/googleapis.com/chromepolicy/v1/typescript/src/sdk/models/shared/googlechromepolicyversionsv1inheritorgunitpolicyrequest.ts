import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";



// GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest
/** 
 * Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.
**/
export class GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policySchema" })
  policySchema?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
