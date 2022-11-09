import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetentionPolicy
/** 
 * RetentionPolicy defines a Backup retention policy for a BackupPlan.
**/
export class RetentionPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupDeleteLockDays" })
  backupDeleteLockDays?: number;

  @Metadata({ data: "json, name=backupRetainDays" })
  backupRetainDays?: number;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;
}
