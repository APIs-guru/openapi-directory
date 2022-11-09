import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NegativeKeyword } from "./negativekeyword";


// ReplaceNegativeKeywordsResponse
/** 
 * Response message for NegativeKeywordService.ReplaceNegativeKeywords.
**/
export class ReplaceNegativeKeywordsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=negativeKeywords", elemType: shared.NegativeKeyword })
  negativeKeywords?: NegativeKeyword[];
}
