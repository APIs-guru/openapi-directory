import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordInput } from "./negativekeyword";
/**
 * Request message for NegativeKeywordService.ReplaceNegativeKeywords.
**/
export declare class ReplaceNegativeKeywordsRequestInput extends SpeakeasyBase {
    newNegativeKeywords?: NegativeKeywordInput[];
}
