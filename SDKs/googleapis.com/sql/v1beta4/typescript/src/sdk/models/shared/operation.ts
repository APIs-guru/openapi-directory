import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupContext } from "./backupcontext";
import { OperationErrors } from "./operationerrors";
import { ExportContext } from "./exportcontext";
import { ImportContext } from "./importcontext";


export enum OperationOperationTypeEnum {
    SqlOperationTypeUnspecified = "SQL_OPERATION_TYPE_UNSPECIFIED",
    Import = "IMPORT",
    Export = "EXPORT",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE",
    Restart = "RESTART",
    Backup = "BACKUP",
    Snapshot = "SNAPSHOT",
    BackupVolume = "BACKUP_VOLUME",
    DeleteVolume = "DELETE_VOLUME",
    RestoreVolume = "RESTORE_VOLUME",
    InjectUser = "INJECT_USER",
    Clone = "CLONE",
    StopReplica = "STOP_REPLICA",
    StartReplica = "START_REPLICA",
    PromoteReplica = "PROMOTE_REPLICA",
    CreateReplica = "CREATE_REPLICA",
    CreateUser = "CREATE_USER",
    DeleteUser = "DELETE_USER",
    UpdateUser = "UPDATE_USER",
    CreateDatabase = "CREATE_DATABASE",
    DeleteDatabase = "DELETE_DATABASE",
    UpdateDatabase = "UPDATE_DATABASE",
    Failover = "FAILOVER",
    DeleteBackup = "DELETE_BACKUP",
    RecreateReplica = "RECREATE_REPLICA",
    TruncateLog = "TRUNCATE_LOG",
    DemoteMaster = "DEMOTE_MASTER",
    Maintenance = "MAINTENANCE",
    EnablePrivateIp = "ENABLE_PRIVATE_IP",
    DeferMaintenance = "DEFER_MAINTENANCE",
    CreateClone = "CREATE_CLONE",
    RescheduleMaintenance = "RESCHEDULE_MAINTENANCE",
    StartExternalSync = "START_EXTERNAL_SYNC",
    LogCleanup = "LOG_CLEANUP",
    AutoRestart = "AUTO_RESTART"
}

export enum OperationStatusEnum {
    SqlOperationStatusUnspecified = "SQL_OPERATION_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE"
}


// Operation
/** 
 * An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.
**/
export class Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupContext" })
  backupContext?: BackupContext;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: OperationErrors;

  @SpeakeasyMetadata({ data: "json, name=exportContext" })
  exportContext?: ExportContext;

  @SpeakeasyMetadata({ data: "json, name=importContext" })
  importContext?: ImportContext;

  @SpeakeasyMetadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operationType" })
  operationType?: OperationOperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLink" })
  targetLink?: string;

  @SpeakeasyMetadata({ data: "json, name=targetProject" })
  targetProject?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
