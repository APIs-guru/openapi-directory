import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { ExecutionReference } from "./executionreference";


// JobStatus
/** 
 * JobStatus represents the current state of a Job.
**/
export class JobStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @Metadata({ data: "json, name=executionCount" })
  executionCount?: number;

  @Metadata({ data: "json, name=latestCreatedExecution" })
  latestCreatedExecution?: ExecutionReference;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;
}
