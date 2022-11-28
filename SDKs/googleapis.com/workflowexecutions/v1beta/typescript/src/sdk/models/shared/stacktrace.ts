import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackTraceElement } from "./stacktraceelement";



// StackTrace
/** 
 * A collection of stack elements (frames) where an error occurred.
**/
export class StackTrace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements", elemType: StackTraceElement })
  elements?: StackTraceElement[];
}
