import { SpeakeasyBase } from "../../../internal/utils";
import { WmxSitemapContent } from "./wmxsitemapcontent";
export declare enum WmxSitemapTypeEnum {
    NotSitemap = "NOT_SITEMAP",
    UrlList = "URL_LIST",
    Sitemap = "SITEMAP",
    RssFeed = "RSS_FEED",
    AtomFeed = "ATOM_FEED",
    PatternSitemap = "PATTERN_SITEMAP",
    Oceanfront = "OCEANFRONT"
}
/**
 * Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
**/
export declare class WmxSitemap extends SpeakeasyBase {
    contents?: WmxSitemapContent[];
    errors?: string;
    isPending?: boolean;
    isSitemapsIndex?: boolean;
    lastDownloaded?: string;
    lastSubmitted?: string;
    path?: string;
    type?: WmxSitemapTypeEnum;
    warnings?: string;
}
