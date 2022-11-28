import { SpeakeasyBase } from "../../../internal/utils";
import { StackFrames } from "./stackframes";
/**
 * A call stack appearing in a trace.
**/
export declare class StackTrace extends SpeakeasyBase {
    stackFrames?: StackFrames;
    stackTraceHashId?: string;
}
