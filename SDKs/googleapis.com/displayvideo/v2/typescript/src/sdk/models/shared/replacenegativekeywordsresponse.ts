import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeyword } from "./negativekeyword";



// ReplaceNegativeKeywordsResponse
/** 
 * Response message for NegativeKeywordService.ReplaceNegativeKeywords.
**/
export class ReplaceNegativeKeywordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negativeKeywords", elemType: NegativeKeyword })
  negativeKeywords?: NegativeKeyword[];
}
