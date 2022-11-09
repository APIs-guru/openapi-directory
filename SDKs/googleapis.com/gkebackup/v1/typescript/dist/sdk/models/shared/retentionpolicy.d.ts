import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * RetentionPolicy defines a Backup retention policy for a BackupPlan.
**/
export declare class RetentionPolicy extends SpeakeasyBase {
    backupDeleteLockDays?: number;
    backupRetainDays?: number;
    locked?: boolean;
}
