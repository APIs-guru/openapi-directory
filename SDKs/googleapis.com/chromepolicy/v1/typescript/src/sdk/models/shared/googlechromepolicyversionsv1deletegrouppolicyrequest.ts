import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";


// GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest
/** 
 * Request parameters for deleting the policy value of a specific group target.
**/
export class GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policySchema" })
  policySchema?: string;

  @Metadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
