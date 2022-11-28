import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeyword } from "./negativekeyword";



// BulkEditNegativeKeywordsResponse
/** 
 * Response message for NegativeKeywordService.BulkEditNegativeKeywords.
**/
export class BulkEditNegativeKeywordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negativeKeywords", elemType: NegativeKeyword })
  negativeKeywords?: NegativeKeyword[];
}
