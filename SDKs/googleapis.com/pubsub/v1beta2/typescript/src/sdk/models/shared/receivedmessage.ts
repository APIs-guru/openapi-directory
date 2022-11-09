import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubMessage } from "./pubsubmessage";


// ReceivedMessage
/** 
 * A message and its corresponding acknowledgment ID.
**/
export class ReceivedMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ackId" })
  ackId?: string;

  @Metadata({ data: "json, name=message" })
  message?: PubsubMessage;
}
