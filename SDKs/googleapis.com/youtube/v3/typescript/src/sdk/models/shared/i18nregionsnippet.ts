import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// I18nRegionSnippet
/** 
 * Basic details about an i18n region, such as region code and human-readable name.
**/
export class I18nRegionSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=gl" })
  gl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
