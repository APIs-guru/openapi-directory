import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeyword } from "./negativekeyword";



// ListNegativeKeywordsResponse
/** 
 * Response message for NegativeKeywordService.ListNegativeKeywords.
**/
export class ListNegativeKeywordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negativeKeywords", elemType: NegativeKeyword })
  negativeKeywords?: NegativeKeyword[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
