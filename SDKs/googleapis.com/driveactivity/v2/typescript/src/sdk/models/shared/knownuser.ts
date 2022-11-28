import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KnownUser
/** 
 * A known user.
**/
export class KnownUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isCurrentUser" })
  isCurrentUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=personName" })
  personName?: string;
}
