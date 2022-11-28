import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordList } from "./negativekeywordlist";



// ListNegativeKeywordListsResponse
/** 
 * Response message for NegativeKeywordListService.ListNegativeKeywordLists.
**/
export class ListNegativeKeywordListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negativeKeywordLists", elemType: NegativeKeywordList })
  negativeKeywordLists?: NegativeKeywordList[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
