import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";


// Translation
/** 
 * A single translation response.
**/
export class Translation extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedLanguageCode" })
  detectedLanguageCode?: string;

  @Metadata({ data: "json, name=glossaryConfig" })
  glossaryConfig?: TranslateTextGlossaryConfig;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=translatedText" })
  translatedText?: string;
}
