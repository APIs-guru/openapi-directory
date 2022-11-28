import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConversationProperties
/** 
 * Conversation properties
**/
export class ConversationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}
