import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest } from "./googlechromepolicyversionsv1deletegrouppolicyrequest";


// GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest
/** 
 * Request message for specifying that multiple policy values will be deleted.
**/
export class GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest })
  requests?: GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[];
}
