import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchKeywordCount } from "./searchkeywordcount";



// ListSearchKeywordImpressionsMonthlyResponse
/** 
 * Represents the response for ListSearchKeywordImpressionsMonthly.
**/
export class ListSearchKeywordImpressionsMonthlyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=searchKeywordsCounts", elemType: SearchKeywordCount })
  searchKeywordsCounts?: SearchKeywordCount[];
}
