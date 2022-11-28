import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";



// SetBreakpointResponse
/** 
 * Response for setting a breakpoint.
**/
export class SetBreakpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breakpoint" })
  breakpoint?: Breakpoint;
}
