import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackFrames } from "./stackframes";



// StackTrace
/** 
 * A call stack appearing in a trace.
**/
export class StackTrace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stackFrames" })
  stackFrames?: StackFrames;

  @SpeakeasyMetadata({ data: "json, name=stackTraceHashId" })
  stackTraceHashId?: string;
}
