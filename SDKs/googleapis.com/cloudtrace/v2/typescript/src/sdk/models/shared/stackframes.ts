import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StackFrame } from "./stackframe";


// StackFrames
/** 
 * A collection of stack frames, which can be truncated.
**/
export class StackFrames extends SpeakeasyBase {
  @Metadata({ data: "json, name=droppedFramesCount" })
  droppedFramesCount?: number;

  @Metadata({ data: "json, name=frame", elemType: shared.StackFrame })
  frame?: StackFrame[];
}
