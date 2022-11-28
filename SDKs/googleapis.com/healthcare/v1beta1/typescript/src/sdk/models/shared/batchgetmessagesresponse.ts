import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// BatchGetMessagesResponse
/** 
 * Gets multiple messages in a specified HL7v2 store.
**/
export class BatchGetMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];
}
