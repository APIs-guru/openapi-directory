import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordList } from "./negativekeywordlist";
/**
 * Response message for NegativeKeywordListService.ListNegativeKeywordLists.
**/
export declare class ListNegativeKeywordListsResponse extends SpeakeasyBase {
    negativeKeywordLists?: NegativeKeywordList[];
    nextPageToken?: string;
}
