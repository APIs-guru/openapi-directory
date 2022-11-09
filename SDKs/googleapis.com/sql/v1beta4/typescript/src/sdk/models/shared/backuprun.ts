import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { OperationError } from "./operationerror";

export enum BackupRunBackupKindEnum {
    SqlBackupKindUnspecified = "SQL_BACKUP_KIND_UNSPECIFIED"
,    Snapshot = "SNAPSHOT"
,    Physical = "PHYSICAL"
}

export enum BackupRunStatusEnum {
    SqlBackupRunStatusUnspecified = "SQL_BACKUP_RUN_STATUS_UNSPECIFIED"
,    Enqueued = "ENQUEUED"
,    Overdue = "OVERDUE"
,    Running = "RUNNING"
,    Failed = "FAILED"
,    Successful = "SUCCESSFUL"
,    Skipped = "SKIPPED"
,    DeletionPending = "DELETION_PENDING"
,    DeletionFailed = "DELETION_FAILED"
,    Deleted = "DELETED"
}

export enum BackupRunTypeEnum {
    SqlBackupRunTypeUnspecified = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED"
,    Automated = "AUTOMATED"
,    OnDemand = "ON_DEMAND"
}


// BackupRun
/** 
 * A BackupRun resource.
**/
export class BackupRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupKind" })
  backupKind?: BackupRunBackupKindEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=diskEncryptionConfiguration" })
  diskEncryptionConfiguration?: DiskEncryptionConfiguration;

  @Metadata({ data: "json, name=diskEncryptionStatus" })
  diskEncryptionStatus?: DiskEncryptionStatus;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=enqueuedTime" })
  enqueuedTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: OperationError;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: BackupRunStatusEnum;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=type" })
  type?: BackupRunTypeEnum;

  @Metadata({ data: "json, name=windowStartTime" })
  windowStartTime?: string;
}
