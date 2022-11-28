import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestResult } from "./suggestresult";



// SuggestResponse
/** 
 * Response of the suggest API.
**/
export class SuggestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestResults", elemType: SuggestResult })
  suggestResults?: SuggestResult[];
}
