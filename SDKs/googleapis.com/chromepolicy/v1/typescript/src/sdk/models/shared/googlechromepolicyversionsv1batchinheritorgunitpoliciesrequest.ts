import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest } from "./googlechromepolicyversionsv1inheritorgunitpolicyrequest";


// GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest
/** 
 * Request message for specifying that multiple policy values inherit their value from their parents.
**/
export class GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest })
  requests?: GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest[];
}
