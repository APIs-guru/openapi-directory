import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// Thread
/** 
 * A collection of messages representing a conversation.
**/
export class Thread extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;
}
