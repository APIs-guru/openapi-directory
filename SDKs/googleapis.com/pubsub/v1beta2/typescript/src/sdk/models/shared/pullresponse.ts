import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceivedMessage } from "./receivedmessage";



// PullResponse
/** 
 * Response for the `Pull` method.
**/
export class PullResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=receivedMessages", elemType: ReceivedMessage })
  receivedMessages?: ReceivedMessage[];
}
