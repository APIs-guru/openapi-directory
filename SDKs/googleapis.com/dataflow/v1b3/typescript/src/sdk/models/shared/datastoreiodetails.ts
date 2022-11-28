import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatastoreIoDetails
/** 
 * Metadata for a Datastore connector used by the job.
**/
export class DatastoreIoDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
