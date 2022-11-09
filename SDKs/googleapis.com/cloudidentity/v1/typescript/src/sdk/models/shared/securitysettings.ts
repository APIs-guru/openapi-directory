import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberRestriction } from "./memberrestriction";


// SecuritySettings
/** 
 * The definition of security settings.
**/
export class SecuritySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberRestriction" })
  memberRestriction?: MemberRestriction;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
