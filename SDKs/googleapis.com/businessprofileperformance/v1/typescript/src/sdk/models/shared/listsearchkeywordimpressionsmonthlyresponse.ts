import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchKeywordCount } from "./searchkeywordcount";


// ListSearchKeywordImpressionsMonthlyResponse
/** 
 * Represents the response for ListSearchKeywordImpressionsMonthly.
**/
export class ListSearchKeywordImpressionsMonthlyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=searchKeywordsCounts", elemType: shared.SearchKeywordCount })
  searchKeywordsCounts?: SearchKeywordCount[];
}
