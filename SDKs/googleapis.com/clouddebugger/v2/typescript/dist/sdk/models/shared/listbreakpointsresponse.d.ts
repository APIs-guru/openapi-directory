import { SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";
/**
 * Response for listing breakpoints.
**/
export declare class ListBreakpointsResponse extends SpeakeasyBase {
    breakpoints?: Breakpoint[];
    nextWaitToken?: string;
}
