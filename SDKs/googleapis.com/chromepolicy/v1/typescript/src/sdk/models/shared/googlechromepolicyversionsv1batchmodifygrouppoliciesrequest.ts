import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest } from "./googlechromepolicyversionsv1modifygrouppolicyrequest";



// GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest
/** 
 * Request message for modifying multiple policy values for a specific group-based target.
**/
export class GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest })
  requests?: GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest[];
}
