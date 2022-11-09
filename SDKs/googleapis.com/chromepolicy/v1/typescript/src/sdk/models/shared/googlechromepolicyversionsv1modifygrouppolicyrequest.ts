import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyValue } from "./googlechromepolicyversionsv1policyvalue";


// GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest
/** 
 * Request parameters for modifying a policy value for a specific group target.
**/
export class GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

  @Metadata({ data: "json, name=policyValue" })
  policyValue?: GoogleChromePolicyVersionsV1PolicyValue;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
