import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TaskAttemptResult } from "./taskattemptresult";


// TaskStatus
/** 
 * TaskStatus represents the status of a task.
**/
export class TaskStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=lastAttemptResult" })
  lastAttemptResult?: TaskAttemptResult;

  @Metadata({ data: "json, name=logUri" })
  logUri?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @Metadata({ data: "json, name=retried" })
  retried?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
