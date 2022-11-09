import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiveChatModeratorSnippet } from "./livechatmoderatorsnippet";


// LiveChatModerator
/** 
 * A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
**/
export class LiveChatModerator extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: LiveChatModeratorSnippet;
}
