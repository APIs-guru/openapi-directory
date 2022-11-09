import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";
import { Feed } from "./feed";


// Registration
/** 
 * An instruction to Classroom to send notifications from the `feed` to the provided destination.
**/
export class Registration extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudPubsubTopic" })
  cloudPubsubTopic?: CloudPubsubTopic;

  @Metadata({ data: "json, name=expiryTime" })
  expiryTime?: string;

  @Metadata({ data: "json, name=feed" })
  feed?: Feed;

  @Metadata({ data: "json, name=registrationId" })
  registrationId?: string;
}
