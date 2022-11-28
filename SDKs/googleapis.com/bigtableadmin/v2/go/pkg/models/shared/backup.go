package shared

type BackupStateEnum string

const (
	BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
	BackupStateEnumCreating         BackupStateEnum = "CREATING"
	BackupStateEnumReady            BackupStateEnum = "READY"
)

// Backup
// A backup of a Cloud Bigtable table.
type Backup struct {
	EncryptionInfo *EncryptionInfo  `json:"encryptionInfo,omitempty"`
	EndTime        *string          `json:"endTime,omitempty"`
	ExpireTime     *string          `json:"expireTime,omitempty"`
	Name           *string          `json:"name,omitempty"`
	SizeBytes      *string          `json:"sizeBytes,omitempty"`
	SourceBackup   *string          `json:"sourceBackup,omitempty"`
	SourceTable    *string          `json:"sourceTable,omitempty"`
	StartTime      *string          `json:"startTime,omitempty"`
	State          *BackupStateEnum `json:"state,omitempty"`
}

// BackupInput
// A backup of a Cloud Bigtable table.
type BackupInput struct {
	EncryptionInfo *EncryptionInfoInput `json:"encryptionInfo,omitempty"`
	ExpireTime     *string              `json:"expireTime,omitempty"`
	Name           *string              `json:"name,omitempty"`
	SourceTable    *string              `json:"sourceTable,omitempty"`
}
