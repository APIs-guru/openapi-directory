import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest } from "./googlechromepolicyversionsv1deletegrouppolicyrequest";



// GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest
/** 
 * Request message for specifying that multiple policy values will be deleted.
**/
export class GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest })
  requests?: GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[];
}
