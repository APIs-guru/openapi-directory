import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnPolicyOnline } from "./returnpolicyonline";


// ListReturnPolicyOnlineResponse
/** 
 * Response message for the `ListReturnPolicyOnline` method.
**/
export class ListReturnPolicyOnlineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=returnPolicies", elemType: shared.ReturnPolicyOnline })
  returnPolicies?: ReturnPolicyOnline[];
}
