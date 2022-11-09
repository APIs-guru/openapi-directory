import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ToolExecution } from "./toolexecution";


// ToolExecutionStep
/** 
 * Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
**/
export class ToolExecutionStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=toolExecution" })
  toolExecution?: ToolExecution;
}
