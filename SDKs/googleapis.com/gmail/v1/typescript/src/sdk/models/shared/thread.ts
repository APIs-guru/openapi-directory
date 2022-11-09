import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";


// Thread
/** 
 * A collection of messages representing a conversation.
**/
export class Thread extends SpeakeasyBase {
  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: Message[];

  @Metadata({ data: "json, name=snippet" })
  snippet?: string;
}
