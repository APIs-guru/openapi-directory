import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// I18nRegionSnippet
/** 
 * Basic details about an i18n region, such as region code and human-readable name.
**/
export class I18nRegionSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gl" })
  gl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
