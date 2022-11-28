import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeyword } from "./negativekeyword";
/**
 * Response message for NegativeKeywordService.ListNegativeKeywords.
**/
export declare class ListNegativeKeywordsResponse extends SpeakeasyBase {
    negativeKeywords?: NegativeKeyword[];
    nextPageToken?: string;
}
