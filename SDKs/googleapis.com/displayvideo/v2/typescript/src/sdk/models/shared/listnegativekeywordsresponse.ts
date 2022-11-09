import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NegativeKeyword } from "./negativekeyword";


// ListNegativeKeywordsResponse
/** 
 * Response message for NegativeKeywordService.ListNegativeKeywords.
**/
export class ListNegativeKeywordsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=negativeKeywords", elemType: shared.NegativeKeyword })
  negativeKeywords?: NegativeKeyword[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
