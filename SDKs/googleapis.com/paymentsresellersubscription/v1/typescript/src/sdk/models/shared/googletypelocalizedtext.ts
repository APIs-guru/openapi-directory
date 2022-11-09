import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleTypeLocalizedText
/** 
 * Localized variant of a text in a particular language.
**/
export class GoogleTypeLocalizedText extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
