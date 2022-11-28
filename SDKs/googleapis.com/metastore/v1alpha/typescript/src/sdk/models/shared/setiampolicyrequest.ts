import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// SetIamPolicyRequest
/** 
 * Request message for SetIamPolicy method.
**/
export class SetIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
