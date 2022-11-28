import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetentionPolicy
/** 
 * RetentionPolicy defines a Backup retention policy for a BackupPlan.
**/
export class RetentionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupDeleteLockDays" })
  backupDeleteLockDays?: number;

  @SpeakeasyMetadata({ data: "json, name=backupRetainDays" })
  backupRetainDays?: number;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;
}
