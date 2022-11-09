import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Profile
/** 
 * Profile for a Gmail user.
**/
export class Profile extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=messagesTotal" })
  messagesTotal?: number;

  @Metadata({ data: "json, name=threadsTotal" })
  threadsTotal?: number;
}
