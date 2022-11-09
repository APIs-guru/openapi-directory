import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiveChatBanSnippet } from "./livechatbansnippet";


// LiveChatBan
/** 
 * A `__liveChatBan__` resource represents a ban for a YouTube live chat.
**/
export class LiveChatBan extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: LiveChatBanSnippet;
}
