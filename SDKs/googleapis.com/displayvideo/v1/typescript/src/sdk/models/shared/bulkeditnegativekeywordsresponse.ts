import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NegativeKeyword } from "./negativekeyword";


// BulkEditNegativeKeywordsResponse
/** 
 * Response message for NegativeKeywordService.BulkEditNegativeKeywords.
**/
export class BulkEditNegativeKeywordsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=negativeKeywords", elemType: shared.NegativeKeyword })
  negativeKeywords?: NegativeKeyword[];
}
