import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KnownUser
/** 
 * A known user.
**/
export class KnownUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=isCurrentUser" })
  isCurrentUser?: boolean;

  @Metadata({ data: "json, name=personName" })
  personName?: string;
}
