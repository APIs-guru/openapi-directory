import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest } from "./googlechromepolicyversionsv1modifyorgunitpolicyrequest";


// GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest
/** 
 * Request message for modifying multiple policy values for a specific target.
**/
export class GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest })
  requests?: GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest[];
}
