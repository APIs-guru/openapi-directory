import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";



// ListBreakpointsResponse
/** 
 * Response for listing breakpoints.
**/
export class ListBreakpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breakpoints", elemType: Breakpoint })
  breakpoints?: Breakpoint[];

  @SpeakeasyMetadata({ data: "json, name=nextWaitToken" })
  nextWaitToken?: string;
}
