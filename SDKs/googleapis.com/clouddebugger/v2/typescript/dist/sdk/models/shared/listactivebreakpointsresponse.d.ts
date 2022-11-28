import { SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";
/**
 * Response for listing active breakpoints.
**/
export declare class ListActiveBreakpointsResponse extends SpeakeasyBase {
    breakpoints?: Breakpoint[];
    nextWaitToken?: string;
    waitExpired?: boolean;
}
