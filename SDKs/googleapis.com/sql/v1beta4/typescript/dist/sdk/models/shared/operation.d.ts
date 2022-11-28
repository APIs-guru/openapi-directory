import { SpeakeasyBase } from "../../../internal/utils";
import { BackupContext } from "./backupcontext";
import { OperationErrors } from "./operationerrors";
import { ExportContext } from "./exportcontext";
import { ImportContext } from "./importcontext";
export declare enum OperationOperationTypeEnum {
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
export declare enum OperationStatusEnum {
    SqlOperationStatusUnspecified = "SQL_OPERATION_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE"
}
/**
 * An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.
**/
export declare class Operation extends SpeakeasyBase {
    backupContext?: BackupContext;
    endTime?: string;
    error?: OperationErrors;
    exportContext?: ExportContext;
    importContext?: ImportContext;
    insertTime?: string;
    kind?: string;
    name?: string;
    operationType?: OperationOperationTypeEnum;
    selfLink?: string;
    startTime?: string;
    status?: OperationStatusEnum;
    targetId?: string;
    targetLink?: string;
    targetProject?: string;
    user?: string;
}
