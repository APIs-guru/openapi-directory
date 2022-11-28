import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WmxSitemap } from "./wmxsitemap";



// SitemapsListResponse
/** 
 * List of sitemaps.
**/
export class SitemapsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sitemap", elemType: WmxSitemap })
  sitemap?: WmxSitemap[];
}
