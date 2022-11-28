import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobReference
/** 
 * Encapsulates the full scoping used to reference a job.
**/
export class JobReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
