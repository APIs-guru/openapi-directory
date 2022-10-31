package shared




type BackupRunBackupKindEnum string

const (
    BackupRunBackupKindEnumSQLBackupKindUnspecified BackupRunBackupKindEnum = "SQL_BACKUP_KIND_UNSPECIFIED"
BackupRunBackupKindEnumSnapshot BackupRunBackupKindEnum = "SNAPSHOT"
BackupRunBackupKindEnumPhysical BackupRunBackupKindEnum = "PHYSICAL"
)



type BackupRunStatusEnum string

const (
    BackupRunStatusEnumSQLBackupRunStatusUnspecified BackupRunStatusEnum = "SQL_BACKUP_RUN_STATUS_UNSPECIFIED"
BackupRunStatusEnumEnqueued BackupRunStatusEnum = "ENQUEUED"
BackupRunStatusEnumOverdue BackupRunStatusEnum = "OVERDUE"
BackupRunStatusEnumRunning BackupRunStatusEnum = "RUNNING"
BackupRunStatusEnumFailed BackupRunStatusEnum = "FAILED"
BackupRunStatusEnumSuccessful BackupRunStatusEnum = "SUCCESSFUL"
BackupRunStatusEnumSkipped BackupRunStatusEnum = "SKIPPED"
BackupRunStatusEnumDeletionPending BackupRunStatusEnum = "DELETION_PENDING"
BackupRunStatusEnumDeletionFailed BackupRunStatusEnum = "DELETION_FAILED"
BackupRunStatusEnumDeleted BackupRunStatusEnum = "DELETED"
)



type BackupRunTypeEnum string

const (
    BackupRunTypeEnumSQLBackupRunTypeUnspecified BackupRunTypeEnum = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED"
BackupRunTypeEnumAutomated BackupRunTypeEnum = "AUTOMATED"
BackupRunTypeEnumOnDemand BackupRunTypeEnum = "ON_DEMAND"
)


type BackupRun struct {
    BackupKind *BackupRunBackupKindEnum `json:"backupKind,omitempty"`
    Description *string `json:"description,omitempty"`
    DiskEncryptionConfiguration *DiskEncryptionConfiguration `json:"diskEncryptionConfiguration,omitempty"`
    DiskEncryptionStatus *DiskEncryptionStatus `json:"diskEncryptionStatus,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    EnqueuedTime *string `json:"enqueuedTime,omitempty"`
    Error *OperationError `json:"error,omitempty"`
    ID *string `json:"id,omitempty"`
    Instance *string `json:"instance,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Location *string `json:"location,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Status *BackupRunStatusEnum `json:"status,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    Type *BackupRunTypeEnum `json:"type,omitempty"`
    WindowStartTime *string `json:"windowStartTime,omitempty"`
    
}

