import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { I18nRegionSnippet } from "./i18nregionsnippet";



// I18nRegion
/** 
 * A *i18nRegion* resource identifies a region where YouTube is available.
**/
export class I18nRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: I18nRegionSnippet;
}
