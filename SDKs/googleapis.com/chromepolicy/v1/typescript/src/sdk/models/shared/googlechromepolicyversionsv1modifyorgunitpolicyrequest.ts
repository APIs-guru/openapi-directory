import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyValue } from "./googlechromepolicyversionsv1policyvalue";



// GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest
/** 
 * Request parameters for modifying a policy value for a specific org unit target.
**/
export class GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

  @SpeakeasyMetadata({ data: "json, name=policyValue" })
  policyValue?: GoogleChromePolicyVersionsV1PolicyValue;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
