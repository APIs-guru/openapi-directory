import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionReference
/** 
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
**/
export class ExecutionReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTimestamp" })
  completionTimestamp?: string;

  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
