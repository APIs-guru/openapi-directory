import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";


// BatchGetMessagesResponse
/** 
 * Gets multiple messages in a specified HL7v2 store.
**/
export class BatchGetMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: Message[];
}
