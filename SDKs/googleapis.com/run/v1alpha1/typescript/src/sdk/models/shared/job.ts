import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectMeta } from "./objectmeta";
import { JobSpec } from "./jobspec";
import { JobStatus } from "./jobstatus";


// Job
/** 
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @Metadata({ data: "json, name=spec" })
  spec?: JobSpec;

  @Metadata({ data: "json, name=status" })
  status?: JobStatus;
}
