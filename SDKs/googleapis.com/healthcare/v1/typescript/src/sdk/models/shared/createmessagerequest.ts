import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";


// CreateMessageRequest
/** 
 * Creates a new message.
**/
export class CreateMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: Message;
}
