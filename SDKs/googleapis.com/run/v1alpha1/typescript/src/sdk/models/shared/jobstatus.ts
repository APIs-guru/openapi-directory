import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobCondition } from "./jobcondition";
import { InstanceStatus } from "./instancestatus";



// JobStatus
/** 
 * JobStatus represents the current state of a Job.
**/
export class JobStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: number;

  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: JobCondition })
  conditions?: JobCondition[];

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceStatus })
  instances?: InstanceStatus[];

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=succeeded" })
  succeeded?: number;
}
