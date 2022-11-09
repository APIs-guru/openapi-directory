import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchHint } from "./searchhint";


// SearchHintResult
/** 
 * Class SearchHintResult.
**/
export class SearchHintResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SearchHints", elemType: shared.SearchHint })
  searchHints?: SearchHint[];

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
