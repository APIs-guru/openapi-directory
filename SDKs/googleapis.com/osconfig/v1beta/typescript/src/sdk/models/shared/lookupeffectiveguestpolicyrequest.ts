import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookupEffectiveGuestPolicyRequest
/** 
 * A request message for getting the effective guest policy assigned to the instance.
**/
export class LookupEffectiveGuestPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osArchitecture" })
  osArchitecture?: string;

  @SpeakeasyMetadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
