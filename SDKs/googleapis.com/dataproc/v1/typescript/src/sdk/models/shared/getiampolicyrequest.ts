import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPolicyOptions } from "./getpolicyoptions";



// GetIamPolicyRequest
/** 
 * Request message for GetIamPolicy method.
**/
export class GetIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: GetPolicyOptions;
}
