import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuggestResult } from "./suggestresult";


// SuggestResponse
/** 
 * Response of the suggest API.
**/
export class SuggestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestResults", elemType: shared.SuggestResult })
  suggestResults?: SuggestResult[];
}
