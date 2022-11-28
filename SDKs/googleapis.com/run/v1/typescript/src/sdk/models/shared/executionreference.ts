import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionReference
/** 
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
**/
export class ExecutionReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTimestamp" })
  completionTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
