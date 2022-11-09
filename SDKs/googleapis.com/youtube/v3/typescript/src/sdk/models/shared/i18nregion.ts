import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { I18nRegionSnippet } from "./i18nregionsnippet";


// I18nRegion
/** 
 * A *i18nRegion* resource identifies a region where YouTube is available.
**/
export class I18nRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: I18nRegionSnippet;
}
