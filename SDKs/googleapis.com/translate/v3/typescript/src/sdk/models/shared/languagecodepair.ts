import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LanguageCodePair
/** 
 * Used with unidirectional glossaries.
**/
export class LanguageCodePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
