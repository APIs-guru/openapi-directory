import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchKeywordCount } from "./searchkeywordcount";
/**
 * Represents the response for ListSearchKeywordImpressionsMonthly.
**/
export declare class ListSearchKeywordImpressionsMonthlyResponse extends SpeakeasyBase {
    nextPageToken?: string;
    searchKeywordsCounts?: SearchKeywordCount[];
}
