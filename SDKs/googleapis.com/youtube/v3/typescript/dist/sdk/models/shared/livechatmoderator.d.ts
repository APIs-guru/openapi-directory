import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatModeratorSnippet } from "./livechatmoderatorsnippet";
/**
 * A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
**/
export declare class LiveChatModerator extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: LiveChatModeratorSnippet;
}
