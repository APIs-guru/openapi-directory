import { SpeakeasyBase } from "../../../internal/utils";
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { OperationError } from "./operationerror";
export declare enum BackupRunBackupKindEnum {
    SqlBackupKindUnspecified = "SQL_BACKUP_KIND_UNSPECIFIED",
    Snapshot = "SNAPSHOT",
    Physical = "PHYSICAL"
}
export declare enum BackupRunStatusEnum {
    SqlBackupRunStatusUnspecified = "SQL_BACKUP_RUN_STATUS_UNSPECIFIED",
    Enqueued = "ENQUEUED",
    Overdue = "OVERDUE",
    Running = "RUNNING",
    Failed = "FAILED",
    Successful = "SUCCESSFUL",
    Skipped = "SKIPPED",
    DeletionPending = "DELETION_PENDING",
    DeletionFailed = "DELETION_FAILED",
    Deleted = "DELETED"
}
export declare enum BackupRunTypeEnum {
    SqlBackupRunTypeUnspecified = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
    Automated = "AUTOMATED",
    OnDemand = "ON_DEMAND"
}
/**
 * A BackupRun resource.
**/
export declare class BackupRun extends SpeakeasyBase {
    backupKind?: BackupRunBackupKindEnum;
    description?: string;
    diskEncryptionConfiguration?: DiskEncryptionConfiguration;
    diskEncryptionStatus?: DiskEncryptionStatus;
    endTime?: string;
    enqueuedTime?: string;
    error?: OperationError;
    id?: string;
    instance?: string;
    kind?: string;
    location?: string;
    selfLink?: string;
    startTime?: string;
    status?: BackupRunStatusEnum;
    timeZone?: string;
    type?: BackupRunTypeEnum;
    windowStartTime?: string;
}
