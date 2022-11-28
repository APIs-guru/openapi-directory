import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageInput } from "./message";



// CreateMessageRequestInput
/** 
 * Creates a new message.
**/
export class CreateMessageRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: MessageInput;
}
