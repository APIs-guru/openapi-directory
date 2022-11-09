import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightsValue } from "./insightsvalue";


// SearchKeywordCount
/** 
 * Represents a single search keyword and its value.
**/
export class SearchKeywordCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=insightsValue" })
  insightsValue?: InsightsValue;

  @Metadata({ data: "json, name=searchKeyword" })
  searchKeyword?: string;
}
