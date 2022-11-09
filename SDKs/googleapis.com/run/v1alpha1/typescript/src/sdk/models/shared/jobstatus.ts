import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobCondition } from "./jobcondition";
import { InstanceStatus } from "./instancestatus";


// JobStatus
/** 
 * JobStatus represents the current state of a Job.
**/
export class JobStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: number;

  @Metadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @Metadata({ data: "json, name=conditions", elemType: shared.JobCondition })
  conditions?: JobCondition[];

  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=instances", elemType: shared.InstanceStatus })
  instances?: InstanceStatus[];

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=succeeded" })
  succeeded?: number;
}
