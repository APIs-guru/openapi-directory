import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordInput } from "./negativekeyword";
/**
 * Request message for NegativeKeywordService.BulkEditNegativeKeywords.
**/
export declare class BulkEditNegativeKeywordsRequestInput extends SpeakeasyBase {
    createdNegativeKeywords?: NegativeKeywordInput[];
    deletedNegativeKeywords?: string[];
}
