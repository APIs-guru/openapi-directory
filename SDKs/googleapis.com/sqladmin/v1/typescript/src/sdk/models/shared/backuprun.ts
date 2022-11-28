import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { OperationError } from "./operationerror";


export enum BackupRunBackupKindEnum {
    SqlBackupKindUnspecified = "SQL_BACKUP_KIND_UNSPECIFIED",
    Snapshot = "SNAPSHOT",
    Physical = "PHYSICAL"
}

export enum BackupRunStatusEnum {
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

export enum BackupRunTypeEnum {
    SqlBackupRunTypeUnspecified = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
    Automated = "AUTOMATED",
    OnDemand = "ON_DEMAND"
}


// BackupRun
/** 
 * A BackupRun resource.
**/
export class BackupRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupKind" })
  backupKind?: BackupRunBackupKindEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=diskEncryptionConfiguration" })
  diskEncryptionConfiguration?: DiskEncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=diskEncryptionStatus" })
  diskEncryptionStatus?: DiskEncryptionStatus;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=enqueuedTime" })
  enqueuedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: OperationError;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BackupRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BackupRunTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=windowStartTime" })
  windowStartTime?: string;
}
