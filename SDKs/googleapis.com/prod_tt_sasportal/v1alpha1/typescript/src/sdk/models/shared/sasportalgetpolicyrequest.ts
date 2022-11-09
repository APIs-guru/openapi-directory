import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalGetPolicyRequest
/** 
 * Request message for `GetPolicy` method.
**/
export class SasPortalGetPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: string;
}
