import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";



// ExecutionStatus
/** 
 * ExecutionStatus represents the current state of an Execution.
**/
export class ExecutionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelledCount" })
  cancelledCount?: number;

  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=failedCount" })
  failedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=logUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @SpeakeasyMetadata({ data: "json, name=retriedCount" })
  retriedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=succeededCount" })
  succeededCount?: number;
}
