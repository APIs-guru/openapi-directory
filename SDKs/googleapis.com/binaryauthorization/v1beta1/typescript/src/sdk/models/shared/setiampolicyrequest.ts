import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicy } from "./iampolicy";



// SetIamPolicyRequest
/** 
 * Request message for `SetIamPolicy` method.
**/
export class SetIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: IamPolicy;
}
