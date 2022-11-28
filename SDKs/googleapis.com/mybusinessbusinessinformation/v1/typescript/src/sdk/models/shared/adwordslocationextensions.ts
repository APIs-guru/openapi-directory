import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdWordsLocationExtensions
/** 
 * Additional information that is surfaced in AdWords.
**/
export class AdWordsLocationExtensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adPhone" })
  adPhone?: string;
}
