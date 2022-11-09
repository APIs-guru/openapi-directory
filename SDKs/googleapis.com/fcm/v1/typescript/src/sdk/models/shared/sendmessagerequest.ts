import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";


// SendMessageRequest
/** 
 * Request to send a message to specified target.
**/
export class SendMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: Message;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
