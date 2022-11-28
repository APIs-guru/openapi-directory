import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";



// UpdateActiveBreakpointRequest
/** 
 * Request to update an active breakpoint.
**/
export class UpdateActiveBreakpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breakpoint" })
  breakpoint?: Breakpoint;
}
