import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WmxSitemap } from "./wmxsitemap";


// SitemapsListResponse
/** 
 * List of sitemaps.
**/
export class SitemapsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=sitemap", elemType: shared.WmxSitemap })
  sitemap?: WmxSitemap[];
}
