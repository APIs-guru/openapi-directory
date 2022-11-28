import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuperChatEventSnippet } from "./superchateventsnippet";



// SuperChatEvent
/** 
 * A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.
**/
export class SuperChatEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: SuperChatEventSnippet;
}
