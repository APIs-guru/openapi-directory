import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WmxSitemapContent } from "./wmxsitemapcontent";



// WmxSitemap
/** 
 * Contains detailed information about a specific URL submitted as a sitemap.
**/
export class WmxSitemap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents", elemType: WmxSitemapContent })
  contents?: WmxSitemapContent[];

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string;

  @SpeakeasyMetadata({ data: "json, name=isPending" })
  isPending?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSitemapsIndex" })
  isSitemapsIndex?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastDownloaded" })
  lastDownloaded?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastSubmitted" })
  lastSubmitted?: Date;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string;
}
