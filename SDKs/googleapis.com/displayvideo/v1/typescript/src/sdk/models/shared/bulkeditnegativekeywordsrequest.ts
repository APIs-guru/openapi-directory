import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NegativeKeyword } from "./negativekeyword";


// BulkEditNegativeKeywordsRequest
/** 
 * Request message for NegativeKeywordService.BulkEditNegativeKeywords.
**/
export class BulkEditNegativeKeywordsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdNegativeKeywords", elemType: shared.NegativeKeyword })
  createdNegativeKeywords?: NegativeKeyword[];

  @Metadata({ data: "json, name=deletedNegativeKeywords" })
  deletedNegativeKeywords?: string[];
}
