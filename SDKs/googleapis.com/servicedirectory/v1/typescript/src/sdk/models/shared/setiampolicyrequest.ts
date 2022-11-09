import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Policy } from "./policy";


// SetIamPolicyRequest
/** 
 * Request message for `SetIamPolicy` method.
**/
export class SetIamPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: Policy;
}
