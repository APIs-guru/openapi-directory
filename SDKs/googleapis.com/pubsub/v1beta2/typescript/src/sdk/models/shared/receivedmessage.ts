import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";



// ReceivedMessage
/** 
 * A message and its corresponding acknowledgment ID.
**/
export class ReceivedMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ackId" })
  ackId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: PubsubMessage;
}
