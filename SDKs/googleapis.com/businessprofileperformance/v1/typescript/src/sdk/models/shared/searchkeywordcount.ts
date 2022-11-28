import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightsValue } from "./insightsvalue";



// SearchKeywordCount
/** 
 * Represents a single search keyword and its value.
**/
export class SearchKeywordCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insightsValue" })
  insightsValue?: InsightsValue;

  @SpeakeasyMetadata({ data: "json, name=searchKeyword" })
  searchKeyword?: string;
}
