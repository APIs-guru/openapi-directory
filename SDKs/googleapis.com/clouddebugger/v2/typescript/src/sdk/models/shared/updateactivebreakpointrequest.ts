import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Breakpoint } from "./breakpoint";


// UpdateActiveBreakpointRequest
/** 
 * Request to update an active breakpoint.
**/
export class UpdateActiveBreakpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=breakpoint" })
  breakpoint?: Breakpoint;
}
