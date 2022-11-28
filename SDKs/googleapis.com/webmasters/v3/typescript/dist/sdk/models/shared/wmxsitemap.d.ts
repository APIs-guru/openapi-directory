import { SpeakeasyBase } from "../../../internal/utils";
import { WmxSitemapContent } from "./wmxsitemapcontent";
/**
 * Contains detailed information about a specific URL submitted as a sitemap.
**/
export declare class WmxSitemap extends SpeakeasyBase {
    contents?: WmxSitemapContent[];
    errors?: string;
    isPending?: boolean;
    isSitemapsIndex?: boolean;
    lastDownloaded?: Date;
    lastSubmitted?: Date;
    path?: string;
    type?: string;
    warnings?: string;
}
