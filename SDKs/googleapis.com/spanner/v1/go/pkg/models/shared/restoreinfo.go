package shared

type RestoreInfoSourceTypeEnum string

const (
	RestoreInfoSourceTypeEnumTypeUnspecified RestoreInfoSourceTypeEnum = "TYPE_UNSPECIFIED"
	RestoreInfoSourceTypeEnumBackup          RestoreInfoSourceTypeEnum = "BACKUP"
)

// RestoreInfo
// Information about the database restore.
type RestoreInfo struct {
	BackupInfo *BackupInfo                `json:"backupInfo,omitempty"`
	SourceType *RestoreInfoSourceTypeEnum `json:"sourceType,omitempty"`
}
