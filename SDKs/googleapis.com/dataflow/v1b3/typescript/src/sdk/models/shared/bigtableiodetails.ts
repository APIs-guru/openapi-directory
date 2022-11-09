import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BigTableIoDetails
/** 
 * Metadata for a Cloud Bigtable connector used by the job.
**/
export class BigTableIoDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=tableId" })
  tableId?: string;
}
