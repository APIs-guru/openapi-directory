import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConversationProperties
/** 
 * Conversation properties
**/
export class ConversationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}
