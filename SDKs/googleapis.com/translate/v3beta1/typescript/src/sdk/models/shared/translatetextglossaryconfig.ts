import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TranslateTextGlossaryConfig
/** 
 * Configures which glossary should be used for a specific target language, and defines options for applying that glossary.
**/
export class TranslateTextGlossaryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=glossary" })
  glossary?: string;

  @Metadata({ data: "json, name=ignoreCase" })
  ignoreCase?: boolean;
}
