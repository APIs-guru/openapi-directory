import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiveChatMessageAuthorDetails } from "./livechatmessageauthordetails";
import { LiveChatMessageSnippet } from "./livechatmessagesnippet";


// LiveChatMessage
/** 
 * A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
**/
export class LiveChatMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorDetails" })
  authorDetails?: LiveChatMessageAuthorDetails;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: LiveChatMessageSnippet;
}
