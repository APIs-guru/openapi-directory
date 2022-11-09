import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookupEffectiveGuestPolicyRequest
/** 
 * A request message for getting the effective guest policy assigned to the instance.
**/
export class LookupEffectiveGuestPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=osArchitecture" })
  osArchitecture?: string;

  @Metadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
