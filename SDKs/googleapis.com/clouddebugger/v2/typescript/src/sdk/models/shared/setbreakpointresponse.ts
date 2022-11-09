import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Breakpoint } from "./breakpoint";


// SetBreakpointResponse
/** 
 * Response for setting a breakpoint.
**/
export class SetBreakpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=breakpoint" })
  breakpoint?: Breakpoint;
}
