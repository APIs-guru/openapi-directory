import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReceivedMessage } from "./receivedmessage";


// PullResponse
/** 
 * Response for the `Pull` method.
**/
export class PullResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=receivedMessages", elemType: shared.ReceivedMessage })
  receivedMessages?: ReceivedMessage[];
}
