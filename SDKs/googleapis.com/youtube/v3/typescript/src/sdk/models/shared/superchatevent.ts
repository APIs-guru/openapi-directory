import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuperChatEventSnippet } from "./superchateventsnippet";


// SuperChatEvent
/** 
 * A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.
**/
export class SuperChatEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: SuperChatEventSnippet;
}
