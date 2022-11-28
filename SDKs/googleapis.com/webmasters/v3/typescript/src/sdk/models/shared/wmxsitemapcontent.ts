import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WmxSitemapContent
/** 
 * Information about the various content types in the sitemap.
**/
export class WmxSitemapContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexed" })
  indexed?: string;

  @SpeakeasyMetadata({ data: "json, name=submitted" })
  submitted?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
