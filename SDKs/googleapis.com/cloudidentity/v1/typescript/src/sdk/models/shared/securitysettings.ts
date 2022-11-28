import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberRestriction } from "./memberrestriction";



// SecuritySettingsInput
/** 
 * The definition of security settings.
**/
export class SecuritySettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberRestriction" })
  memberRestriction?: MemberRestriction;
}
