import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackupPlan } from "./backupplan";


// ListBackupPlansResponse
/** 
 * Response message for ListBackupPlans.
**/
export class ListBackupPlansResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupPlans", elemType: shared.BackupPlan })
  backupPlans?: BackupPlan[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
