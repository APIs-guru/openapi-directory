import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BigTableIoDetails
/** 
 * Metadata for a Cloud Bigtable connector used by the job.
**/
export class BigTableIoDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;
}
