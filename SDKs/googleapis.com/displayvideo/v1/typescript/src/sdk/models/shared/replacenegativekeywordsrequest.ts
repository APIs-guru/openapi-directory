import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NegativeKeyword } from "./negativekeyword";


// ReplaceNegativeKeywordsRequest
/** 
 * Request message for NegativeKeywordService.ReplaceNegativeKeywords.
**/
export class ReplaceNegativeKeywordsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newNegativeKeywords", elemType: shared.NegativeKeyword })
  newNegativeKeywords?: NegativeKeyword[];
}
