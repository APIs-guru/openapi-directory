import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordInput } from "./negativekeyword";



// BulkEditNegativeKeywordsRequestInput
/** 
 * Request message for NegativeKeywordService.BulkEditNegativeKeywords.
**/
export class BulkEditNegativeKeywordsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdNegativeKeywords", elemType: NegativeKeywordInput })
  createdNegativeKeywords?: NegativeKeywordInput[];

  @SpeakeasyMetadata({ data: "json, name=deletedNegativeKeywords" })
  deletedNegativeKeywords?: string[];
}
