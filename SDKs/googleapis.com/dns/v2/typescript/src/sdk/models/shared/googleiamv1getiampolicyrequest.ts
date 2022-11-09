import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIamV1GetPolicyOptions } from "./googleiamv1getpolicyoptions";


// GoogleIamV1GetIamPolicyRequest
/** 
 * Request message for `GetIamPolicy` method.
**/
export class GoogleIamV1GetIamPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: GoogleIamV1GetPolicyOptions;
}
