import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";



// ListActiveBreakpointsResponse
/** 
 * Response for listing active breakpoints.
**/
export class ListActiveBreakpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breakpoints", elemType: Breakpoint })
  breakpoints?: Breakpoint[];

  @SpeakeasyMetadata({ data: "json, name=nextWaitToken" })
  nextWaitToken?: string;

  @SpeakeasyMetadata({ data: "json, name=waitExpired" })
  waitExpired?: boolean;
}
