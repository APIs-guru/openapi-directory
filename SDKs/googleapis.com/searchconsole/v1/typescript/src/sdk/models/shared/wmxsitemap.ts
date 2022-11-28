import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WmxSitemapContent } from "./wmxsitemapcontent";


export enum WmxSitemapTypeEnum {
    NotSitemap = "NOT_SITEMAP",
    UrlList = "URL_LIST",
    Sitemap = "SITEMAP",
    RssFeed = "RSS_FEED",
    AtomFeed = "ATOM_FEED",
    PatternSitemap = "PATTERN_SITEMAP",
    Oceanfront = "OCEANFRONT"
}


// WmxSitemap
/** 
 * Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
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
  lastDownloaded?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSubmitted" })
  lastSubmitted?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WmxSitemapTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string;
}
