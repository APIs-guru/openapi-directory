import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSearchIdeahubV1alphaAvailableLocale
/** 
 * Represents locales that are available for a web property.
**/
export class GoogleSearchIdeahubV1alphaAvailableLocale extends SpeakeasyBase {
  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
