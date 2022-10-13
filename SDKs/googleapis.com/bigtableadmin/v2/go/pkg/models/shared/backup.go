package shared

type BackupStateEnum string

const (
	BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
	BackupStateEnumCreating         BackupStateEnum = "CREATING"
	BackupStateEnumReady            BackupStateEnum = "READY"
)

type Backup struct {
	EncryptionInfo *EncryptionInfo  `json:"encryptionInfo"`
	EndTime        *string          `json:"endTime"`
	ExpireTime     *string          `json:"expireTime"`
	Name           *string          `json:"name"`
	SizeBytes      *string          `json:"sizeBytes"`
	SourceTable    *string          `json:"sourceTable"`
	StartTime      *string          `json:"startTime"`
	State          *BackupStateEnum `json:"state"`
}
