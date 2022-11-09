import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest } from "./googlechromepolicyversionsv1modifygrouppolicyrequest";


// GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest
/** 
 * Request message for modifying multiple policy values for a specific group-based target.
**/
export class GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest })
  requests?: GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest[];
}
