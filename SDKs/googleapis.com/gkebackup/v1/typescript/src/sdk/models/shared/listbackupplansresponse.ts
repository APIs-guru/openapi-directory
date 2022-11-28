import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupPlan } from "./backupplan";



// ListBackupPlansResponse
/** 
 * Response message for ListBackupPlans.
**/
export class ListBackupPlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupPlans", elemType: BackupPlan })
  backupPlans?: BackupPlan[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
