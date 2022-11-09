import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Breakpoint } from "./breakpoint";


// ListBreakpointsResponse
/** 
 * Response for listing breakpoints.
**/
export class ListBreakpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=breakpoints", elemType: shared.Breakpoint })
  breakpoints?: Breakpoint[];

  @Metadata({ data: "json, name=nextWaitToken" })
  nextWaitToken?: string;
}
