import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";



// Translation
/** 
 * A single translation response.
**/
export class Translation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedLanguageCode" })
  detectedLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=glossaryConfig" })
  glossaryConfig?: TranslateTextGlossaryConfig;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=translatedText" })
  translatedText?: string;
}
