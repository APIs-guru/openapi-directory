import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1Policy } from "./googleiamv1policy";



// GoogleIamV1SetIamPolicyRequest
/** 
 * Request message for SetIamPolicy method.
**/
export class GoogleIamV1SetIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: GoogleIamV1Policy;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
