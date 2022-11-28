import { SpeakeasyBase } from "../../../internal/utils";
import { StackFrame } from "./stackframe";
/**
 * A collection of stack frames, which can be truncated.
**/
export declare class StackFrames extends SpeakeasyBase {
    droppedFramesCount?: number;
    frame?: StackFrame[];
}
