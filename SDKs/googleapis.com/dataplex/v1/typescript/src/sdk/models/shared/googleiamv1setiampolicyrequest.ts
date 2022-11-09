import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIamV1Policy } from "./googleiamv1policy";


// GoogleIamV1SetIamPolicyRequest
/** 
 * Request message for SetIamPolicy method.
**/
export class GoogleIamV1SetIamPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: GoogleIamV1Policy;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
