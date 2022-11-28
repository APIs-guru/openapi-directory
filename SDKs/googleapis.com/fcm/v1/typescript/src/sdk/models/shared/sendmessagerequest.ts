import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// SendMessageRequest
/** 
 * Request to send a message to specified target.
**/
export class SendMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: Message;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
