import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest } from "./googlechromepolicyversionsv1modifyorgunitpolicyrequest";



// GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest
/** 
 * Request message for modifying multiple policy values for a specific target.
**/
export class GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest })
  requests?: GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest[];
}
