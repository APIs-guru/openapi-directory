import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SasPortalPolicy } from "./sasportalpolicy";


// SasPortalSetPolicyRequest
/** 
 * Request message for `SetPolicy` method.
**/
export class SasPortalSetPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableNotification" })
  disableNotification?: boolean;

  @Metadata({ data: "json, name=policy" })
  policy?: SasPortalPolicy;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}
