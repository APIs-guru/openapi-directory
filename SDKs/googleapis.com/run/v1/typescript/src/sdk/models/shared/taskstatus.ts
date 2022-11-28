import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TaskAttemptResult } from "./taskattemptresult";



// TaskStatus
/** 
 * TaskStatus represents the status of a task.
**/
export class TaskStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=lastAttemptResult" })
  lastAttemptResult?: TaskAttemptResult;

  @SpeakeasyMetadata({ data: "json, name=logUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @SpeakeasyMetadata({ data: "json, name=retried" })
  retried?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
