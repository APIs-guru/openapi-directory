import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1GetPolicyOptions } from "./googleiamv1getpolicyoptions";



// GoogleIamV1GetIamPolicyRequest
/** 
 * Request message for `GetIamPolicy` method.
**/
export class GoogleIamV1GetIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: GoogleIamV1GetPolicyOptions;
}
