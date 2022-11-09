import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WmxSitemapContent
/** 
 * Information about the various content types in the sitemap.
**/
export class WmxSitemapContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexed" })
  indexed?: string;

  @Metadata({ data: "json, name=submitted" })
  submitted?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
