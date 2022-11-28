import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackFrame } from "./stackframe";



// StackFrames
/** 
 * A collection of stack frames, which can be truncated.
**/
export class StackFrames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droppedFramesCount" })
  droppedFramesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=frame", elemType: StackFrame })
  frame?: StackFrame[];
}
