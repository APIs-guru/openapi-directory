import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdWordsLocationExtensions
/** 
 * Additional information that is surfaced in AdWords.
**/
export class AdWordsLocationExtensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=adPhone" })
  adPhone?: string;
}
