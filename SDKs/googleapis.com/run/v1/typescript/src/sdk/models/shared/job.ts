import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { JobSpec } from "./jobspec";
import { JobStatus } from "./jobstatus";



// Job
/** 
 * Job represents the configuration of a single job, which references a container image which is run to completion.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: JobSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatus;
}
