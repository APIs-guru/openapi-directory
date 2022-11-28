import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalGetPolicyRequest
/** 
 * Request message for `GetPolicy` method.
**/
export class SasPortalGetPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
