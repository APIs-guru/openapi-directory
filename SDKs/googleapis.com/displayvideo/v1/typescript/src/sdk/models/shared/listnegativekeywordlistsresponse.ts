import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NegativeKeywordList } from "./negativekeywordlist";


// ListNegativeKeywordListsResponse
/** 
 * Response message for NegativeKeywordListService.ListNegativeKeywordLists.
**/
export class ListNegativeKeywordListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=negativeKeywordLists", elemType: shared.NegativeKeywordList })
  negativeKeywordLists?: NegativeKeywordList[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
