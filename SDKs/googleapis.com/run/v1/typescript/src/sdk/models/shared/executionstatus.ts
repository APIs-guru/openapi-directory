import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";


// ExecutionStatus
/** 
 * ExecutionStatus represents the current state of an Execution.
**/
export class ExecutionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelledCount" })
  cancelledCount?: number;

  @Metadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @Metadata({ data: "json, name=failedCount" })
  failedCount?: number;

  @Metadata({ data: "json, name=logUri" })
  logUri?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @Metadata({ data: "json, name=retriedCount" })
  retriedCount?: number;

  @Metadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=succeededCount" })
  succeededCount?: number;
}
