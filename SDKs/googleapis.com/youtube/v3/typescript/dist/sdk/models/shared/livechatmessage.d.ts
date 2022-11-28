import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatMessageAuthorDetails } from "./livechatmessageauthordetails";
import { LiveChatMessageSnippet } from "./livechatmessagesnippet";
/**
 * A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
**/
export declare class LiveChatMessage extends SpeakeasyBase {
    authorDetails?: LiveChatMessageAuthorDetails;
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: LiveChatMessageSnippet;
}
