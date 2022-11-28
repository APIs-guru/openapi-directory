import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveChatMessageAuthorDetails } from "./livechatmessageauthordetails";
import { LiveChatMessageSnippet } from "./livechatmessagesnippet";



// LiveChatMessage
/** 
 * A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
**/
export class LiveChatMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorDetails" })
  authorDetails?: LiveChatMessageAuthorDetails;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: LiveChatMessageSnippet;
}
