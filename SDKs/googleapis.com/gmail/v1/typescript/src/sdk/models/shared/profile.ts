import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Profile
/** 
 * Profile for a Gmail user.
**/
export class Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=messagesTotal" })
  messagesTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=threadsTotal" })
  threadsTotal?: number;
}
