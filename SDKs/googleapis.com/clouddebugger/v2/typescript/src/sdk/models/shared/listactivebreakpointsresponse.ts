import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Breakpoint } from "./breakpoint";


// ListActiveBreakpointsResponse
/** 
 * Response for listing active breakpoints.
**/
export class ListActiveBreakpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=breakpoints", elemType: shared.Breakpoint })
  breakpoints?: Breakpoint[];

  @Metadata({ data: "json, name=nextWaitToken" })
  nextWaitToken?: string;

  @Metadata({ data: "json, name=waitExpired" })
  waitExpired?: boolean;
}
