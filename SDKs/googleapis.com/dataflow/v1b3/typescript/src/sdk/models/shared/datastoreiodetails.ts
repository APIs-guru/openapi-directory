import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatastoreIoDetails
/** 
 * Metadata for a Datastore connector used by the job.
**/
export class DatastoreIoDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
