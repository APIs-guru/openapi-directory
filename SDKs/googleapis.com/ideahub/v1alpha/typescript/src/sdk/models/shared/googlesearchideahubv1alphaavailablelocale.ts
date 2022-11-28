import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSearchIdeahubV1alphaAvailableLocale
/** 
 * Represents locales that are available for a web property.
**/
export class GoogleSearchIdeahubV1alphaAvailableLocale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
