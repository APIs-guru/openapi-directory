import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LanguageCodePair
/** 
 * Used with unidirectional glossaries.
**/
export class LanguageCodePair extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
