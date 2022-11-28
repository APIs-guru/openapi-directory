import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveChatModeratorSnippet } from "./livechatmoderatorsnippet";



// LiveChatModerator
/** 
 * A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
**/
export class LiveChatModerator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: LiveChatModeratorSnippet;
}
