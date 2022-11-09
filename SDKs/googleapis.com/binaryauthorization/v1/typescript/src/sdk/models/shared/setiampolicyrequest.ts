import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicy } from "./iampolicy";


// SetIamPolicyRequest
/** 
 * Request message for `SetIamPolicy` method.
**/
export class SetIamPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: IamPolicy;
}
