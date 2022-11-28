import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest } from "./googlechromepolicyversionsv1inheritorgunitpolicyrequest";



// GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest
/** 
 * Request message for specifying that multiple policy values inherit their value from their parents.
**/
export class GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest })
  requests?: GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest[];
}
