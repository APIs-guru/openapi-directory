package shared




type OperationOperationTypeEnum string

const (
    OperationOperationTypeEnumSQLOperationTypeUnspecified OperationOperationTypeEnum = "SQL_OPERATION_TYPE_UNSPECIFIED"
OperationOperationTypeEnumImport OperationOperationTypeEnum = "IMPORT"
OperationOperationTypeEnumExport OperationOperationTypeEnum = "EXPORT"
OperationOperationTypeEnumCreate OperationOperationTypeEnum = "CREATE"
OperationOperationTypeEnumUpdate OperationOperationTypeEnum = "UPDATE"
OperationOperationTypeEnumDelete OperationOperationTypeEnum = "DELETE"
OperationOperationTypeEnumRestart OperationOperationTypeEnum = "RESTART"
OperationOperationTypeEnumBackup OperationOperationTypeEnum = "BACKUP"
OperationOperationTypeEnumSnapshot OperationOperationTypeEnum = "SNAPSHOT"
OperationOperationTypeEnumBackupVolume OperationOperationTypeEnum = "BACKUP_VOLUME"
OperationOperationTypeEnumDeleteVolume OperationOperationTypeEnum = "DELETE_VOLUME"
OperationOperationTypeEnumRestoreVolume OperationOperationTypeEnum = "RESTORE_VOLUME"
OperationOperationTypeEnumInjectUser OperationOperationTypeEnum = "INJECT_USER"
OperationOperationTypeEnumClone OperationOperationTypeEnum = "CLONE"
OperationOperationTypeEnumStopReplica OperationOperationTypeEnum = "STOP_REPLICA"
OperationOperationTypeEnumStartReplica OperationOperationTypeEnum = "START_REPLICA"
OperationOperationTypeEnumPromoteReplica OperationOperationTypeEnum = "PROMOTE_REPLICA"
OperationOperationTypeEnumCreateReplica OperationOperationTypeEnum = "CREATE_REPLICA"
OperationOperationTypeEnumCreateUser OperationOperationTypeEnum = "CREATE_USER"
OperationOperationTypeEnumDeleteUser OperationOperationTypeEnum = "DELETE_USER"
OperationOperationTypeEnumUpdateUser OperationOperationTypeEnum = "UPDATE_USER"
OperationOperationTypeEnumCreateDatabase OperationOperationTypeEnum = "CREATE_DATABASE"
OperationOperationTypeEnumDeleteDatabase OperationOperationTypeEnum = "DELETE_DATABASE"
OperationOperationTypeEnumUpdateDatabase OperationOperationTypeEnum = "UPDATE_DATABASE"
OperationOperationTypeEnumFailover OperationOperationTypeEnum = "FAILOVER"
OperationOperationTypeEnumDeleteBackup OperationOperationTypeEnum = "DELETE_BACKUP"
OperationOperationTypeEnumRecreateReplica OperationOperationTypeEnum = "RECREATE_REPLICA"
OperationOperationTypeEnumTruncateLog OperationOperationTypeEnum = "TRUNCATE_LOG"
OperationOperationTypeEnumDemoteMaster OperationOperationTypeEnum = "DEMOTE_MASTER"
OperationOperationTypeEnumMaintenance OperationOperationTypeEnum = "MAINTENANCE"
OperationOperationTypeEnumEnablePrivateIP OperationOperationTypeEnum = "ENABLE_PRIVATE_IP"
OperationOperationTypeEnumDeferMaintenance OperationOperationTypeEnum = "DEFER_MAINTENANCE"
OperationOperationTypeEnumCreateClone OperationOperationTypeEnum = "CREATE_CLONE"
OperationOperationTypeEnumRescheduleMaintenance OperationOperationTypeEnum = "RESCHEDULE_MAINTENANCE"
OperationOperationTypeEnumStartExternalSync OperationOperationTypeEnum = "START_EXTERNAL_SYNC"
OperationOperationTypeEnumLogCleanup OperationOperationTypeEnum = "LOG_CLEANUP"
OperationOperationTypeEnumAutoRestart OperationOperationTypeEnum = "AUTO_RESTART"
)



type OperationStatusEnum string

const (
    OperationStatusEnumSQLOperationStatusUnspecified OperationStatusEnum = "SQL_OPERATION_STATUS_UNSPECIFIED"
OperationStatusEnumPending OperationStatusEnum = "PENDING"
OperationStatusEnumRunning OperationStatusEnum = "RUNNING"
OperationStatusEnumDone OperationStatusEnum = "DONE"
)


type Operation struct {
    BackupContext *BackupContext `json:"backupContext,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Error *OperationErrors `json:"error,omitempty"`
    ExportContext *ExportContext `json:"exportContext,omitempty"`
    ImportContext *ImportContext `json:"importContext,omitempty"`
    InsertTime *string `json:"insertTime,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    OperationType *OperationOperationTypeEnum `json:"operationType,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Status *OperationStatusEnum `json:"status,omitempty"`
    TargetID *string `json:"targetId,omitempty"`
    TargetLink *string `json:"targetLink,omitempty"`
    TargetProject *string `json:"targetProject,omitempty"`
    User *string `json:"user,omitempty"`
    
}

