import { SpeakeasyBase } from "../../../internal/utils";
import { SuperChatEventSnippet } from "./superchateventsnippet";
/**
 * A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.
**/
export declare class SuperChatEvent extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: SuperChatEventSnippet;
}
