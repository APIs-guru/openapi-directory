import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { ExecutionReference } from "./executionreference";



// JobStatus
/** 
 * JobStatus represents the current state of a Job.
**/
export class JobStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=executionCount" })
  executionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=latestCreatedExecution" })
  latestCreatedExecution?: ExecutionReference;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;
}
