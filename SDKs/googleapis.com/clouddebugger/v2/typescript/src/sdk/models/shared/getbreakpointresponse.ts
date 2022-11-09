import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Breakpoint } from "./breakpoint";


// GetBreakpointResponse
/** 
 * Response for getting breakpoint information.
**/
export class GetBreakpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=breakpoint" })
  breakpoint?: Breakpoint;
}
