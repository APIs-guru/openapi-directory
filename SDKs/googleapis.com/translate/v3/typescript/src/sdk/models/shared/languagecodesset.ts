import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LanguageCodesSet
/** 
 * Used with equivalent term set glossaries.
**/
export class LanguageCodesSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCodes" })
  languageCodes?: string[];
}
