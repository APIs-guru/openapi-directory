import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";
import { Feed } from "./feed";



// Registration
/** 
 * An instruction to Classroom to send notifications from the `feed` to the provided destination.
**/
export class Registration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudPubsubTopic" })
  cloudPubsubTopic?: CloudPubsubTopic;

  @SpeakeasyMetadata({ data: "json, name=expiryTime" })
  expiryTime?: string;

  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed?: Feed;

  @SpeakeasyMetadata({ data: "json, name=registrationId" })
  registrationId?: string;
}
