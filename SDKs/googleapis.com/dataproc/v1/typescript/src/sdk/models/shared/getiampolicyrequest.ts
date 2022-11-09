import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GetPolicyOptions } from "./getpolicyoptions";


// GetIamPolicyRequest
/** 
 * Request message for GetIamPolicy method.
**/
export class GetIamPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: GetPolicyOptions;
}
