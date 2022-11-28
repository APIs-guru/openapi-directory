import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveChatBanSnippet } from "./livechatbansnippet";



// LiveChatBan
/** 
 * A `__liveChatBan__` resource represents a ban for a YouTube live chat.
**/
export class LiveChatBan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: LiveChatBanSnippet;
}
