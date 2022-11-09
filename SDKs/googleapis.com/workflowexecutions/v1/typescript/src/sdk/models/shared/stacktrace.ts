import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StackTraceElement } from "./stacktraceelement";


// StackTrace
/** 
 * A collection of stack elements (frames) where an error occurred.
**/
export class StackTrace extends SpeakeasyBase {
  @Metadata({ data: "json, name=elements", elemType: shared.StackTraceElement })
  elements?: StackTraceElement[];
}
