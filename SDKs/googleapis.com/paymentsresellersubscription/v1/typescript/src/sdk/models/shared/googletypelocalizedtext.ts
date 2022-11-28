import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleTypeLocalizedText
/** 
 * Localized variant of a text in a particular language.
**/
export class GoogleTypeLocalizedText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
