import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyOnline } from "./returnpolicyonline";



// ListReturnPolicyOnlineResponse
/** 
 * Response message for the `ListReturnPolicyOnline` method.
**/
export class ListReturnPolicyOnlineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=returnPolicies", elemType: ReturnPolicyOnline })
  returnPolicies?: ReturnPolicyOnline[];
}
