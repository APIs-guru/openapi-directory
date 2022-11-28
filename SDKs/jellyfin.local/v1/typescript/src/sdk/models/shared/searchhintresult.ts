import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchHint } from "./searchhint";



// SearchHintResult
/** 
 * Class SearchHintResult.
**/
export class SearchHintResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SearchHints", elemType: SearchHint })
  searchHints?: SearchHint[];

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
