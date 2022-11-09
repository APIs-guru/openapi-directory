import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WmxSitemapContent } from "./wmxsitemapcontent";


// WmxSitemap
/** 
 * Contains detailed information about a specific URL submitted as a sitemap.
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
  lastDownloaded?: Date;

  @Metadata({ data: "json, name=lastSubmitted" })
  lastSubmitted?: Date;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=warnings" })
  warnings?: string;
}
