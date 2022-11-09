import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Debuggee } from "./debuggee";


// ListDebuggeesResponse
/** 
 * Response for listing debuggees.
**/
export class ListDebuggeesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=debuggees", elemType: shared.Debuggee })
  debuggees?: Debuggee[];
}
