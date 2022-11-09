import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2ExecutionReference
/** 
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
**/
export class GoogleCloudRunV2ExecutionReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
