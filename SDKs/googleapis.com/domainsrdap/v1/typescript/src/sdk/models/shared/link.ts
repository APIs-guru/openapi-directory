import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Link
/** 
 * Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
**/
export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=hreflang" })
  hreflang?: string;

  @Metadata({ data: "json, name=media" })
  media?: string;

  @Metadata({ data: "json, name=rel" })
  rel?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
