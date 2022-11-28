import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordInput } from "./negativekeyword";



// ReplaceNegativeKeywordsRequestInput
/** 
 * Request message for NegativeKeywordService.ReplaceNegativeKeywords.
**/
export class ReplaceNegativeKeywordsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newNegativeKeywords", elemType: NegativeKeywordInput })
  newNegativeKeywords?: NegativeKeywordInput[];
}
