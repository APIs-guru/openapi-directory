import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";



// GetBreakpointResponse
/** 
 * Response for getting breakpoint information.
**/
export class GetBreakpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breakpoint" })
  breakpoint?: Breakpoint;
}
