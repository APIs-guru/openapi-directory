import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TranslateTextGlossaryConfig
/** 
 * Configures which glossary should be used for a specific target language, and defines options for applying that glossary.
**/
export class TranslateTextGlossaryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=glossary" })
  glossary?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreCase" })
  ignoreCase?: boolean;
}
