package shared

type BackupRunBackupKindEnum string

const (
	BackupRunBackupKindEnumSQLBackupKindUnspecified BackupRunBackupKindEnum = "SQL_BACKUP_KIND_UNSPECIFIED"
	BackupRunBackupKindEnumSnapshot                 BackupRunBackupKindEnum = "SNAPSHOT"
	BackupRunBackupKindEnumPhysical                 BackupRunBackupKindEnum = "PHYSICAL"
)

type BackupRunStatusEnum string

const (
	BackupRunStatusEnumSQLBackupRunStatusUnspecified BackupRunStatusEnum = "SQL_BACKUP_RUN_STATUS_UNSPECIFIED"
	BackupRunStatusEnumEnqueued                      BackupRunStatusEnum = "ENQUEUED"
	BackupRunStatusEnumOverdue                       BackupRunStatusEnum = "OVERDUE"
	BackupRunStatusEnumRunning                       BackupRunStatusEnum = "RUNNING"
	BackupRunStatusEnumFailed                        BackupRunStatusEnum = "FAILED"
	BackupRunStatusEnumSuccessful                    BackupRunStatusEnum = "SUCCESSFUL"
	BackupRunStatusEnumSkipped                       BackupRunStatusEnum = "SKIPPED"
	BackupRunStatusEnumDeletionPending               BackupRunStatusEnum = "DELETION_PENDING"
	BackupRunStatusEnumDeletionFailed                BackupRunStatusEnum = "DELETION_FAILED"
	BackupRunStatusEnumDeleted                       BackupRunStatusEnum = "DELETED"
)

type BackupRunTypeEnum string

const (
	BackupRunTypeEnumSQLBackupRunTypeUnspecified BackupRunTypeEnum = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED"
	BackupRunTypeEnumAutomated                   BackupRunTypeEnum = "AUTOMATED"
	BackupRunTypeEnumOnDemand                    BackupRunTypeEnum = "ON_DEMAND"
)

type BackupRun struct {
	BackupKind                  *BackupRunBackupKindEnum     `json:"backupKind"`
	Description                 *string                      `json:"description"`
	DiskEncryptionConfiguration *DiskEncryptionConfiguration `json:"diskEncryptionConfiguration"`
	DiskEncryptionStatus        *DiskEncryptionStatus        `json:"diskEncryptionStatus"`
	EndTime                     *string                      `json:"endTime"`
	EnqueuedTime                *string                      `json:"enqueuedTime"`
	Error                       *OperationError              `json:"error"`
	ID                          *string                      `json:"id"`
	Instance                    *string                      `json:"instance"`
	Kind                        *string                      `json:"kind"`
	Location                    *string                      `json:"location"`
	SelfLink                    *string                      `json:"selfLink"`
	StartTime                   *string                      `json:"startTime"`
	Status                      *BackupRunStatusEnum         `json:"status"`
	TimeZone                    *string                      `json:"timeZone"`
	Type                        *BackupRunTypeEnum           `json:"type"`
	WindowStartTime             *string                      `json:"windowStartTime"`
}
