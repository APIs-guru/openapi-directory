import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LanguageCodesSet
/** 
 * Used with equivalent term set glossaries.
**/
export class LanguageCodesSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCodes" })
  languageCodes?: string[];
}
