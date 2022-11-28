import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Debuggee } from "./debuggee";



// ListDebuggeesResponse
/** 
 * Response for listing debuggees.
**/
export class ListDebuggeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debuggees", elemType: Debuggee })
  debuggees?: Debuggee[];
}
