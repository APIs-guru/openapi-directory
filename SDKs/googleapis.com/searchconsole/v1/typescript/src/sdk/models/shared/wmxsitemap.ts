import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WmxSitemapContent } from "./wmxsitemapcontent";

export enum WmxSitemapTypeEnum {
    NotSitemap = "NOT_SITEMAP"
,    UrlList = "URL_LIST"
,    Sitemap = "SITEMAP"
,    RssFeed = "RSS_FEED"
,    AtomFeed = "ATOM_FEED"
,    PatternSitemap = "PATTERN_SITEMAP"
,    Oceanfront = "OCEANFRONT"
}


// WmxSitemap
/** 
 * Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
**/
export class WmxSitemap extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents", elemType: shared.WmxSitemapContent })
  contents?: WmxSitemapContent[];

  @Metadata({ data: "json, name=errors" })
  errors?: string;

  @Metadata({ data: "json, name=isPending" })
  isPending?: boolean;

  @Metadata({ data: "json, name=isSitemapsIndex" })
  isSitemapsIndex?: boolean;

  @Metadata({ data: "json, name=lastDownloaded" })
  lastDownloaded?: string;

  @Metadata({ data: "json, name=lastSubmitted" })
  lastSubmitted?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=type" })
  type?: WmxSitemapTypeEnum;

  @Metadata({ data: "json, name=warnings" })
  warnings?: string;
}
