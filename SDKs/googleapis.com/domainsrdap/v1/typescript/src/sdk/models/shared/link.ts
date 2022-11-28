import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Link
/** 
 * Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=hreflang" })
  hreflang?: string;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: string;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
