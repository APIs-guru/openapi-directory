import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StackFrames } from "./stackframes";


// StackTrace
/** 
 * A call stack appearing in a trace.
**/
export class StackTrace extends SpeakeasyBase {
  @Metadata({ data: "json, name=stackFrames" })
  stackFrames?: StackFrames;

  @Metadata({ data: "json, name=stackTraceHashId" })
  stackTraceHashId?: string;
}
