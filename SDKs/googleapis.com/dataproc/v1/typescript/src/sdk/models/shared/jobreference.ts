import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobReference
/** 
 * Encapsulates the full scoping used to reference a job.
**/
export class JobReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
