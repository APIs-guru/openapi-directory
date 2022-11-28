import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatBanSnippet } from "./livechatbansnippet";
/**
 * A `__liveChatBan__` resource represents a ban for a YouTube live chat.
**/
export declare class LiveChatBan extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: LiveChatBanSnippet;
}
