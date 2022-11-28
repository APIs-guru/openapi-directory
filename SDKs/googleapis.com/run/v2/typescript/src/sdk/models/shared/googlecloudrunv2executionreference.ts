import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2ExecutionReference
/** 
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
**/
export class GoogleCloudRunV2ExecutionReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
