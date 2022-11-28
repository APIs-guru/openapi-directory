import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalPolicy } from "./sasportalpolicy";



// SasPortalSetPolicyRequest
/** 
 * Request message for `SetPolicy` method.
**/
export class SasPortalSetPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableNotification" })
  disableNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: SasPortalPolicy;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
