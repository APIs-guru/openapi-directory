package shared

type RestoreInfoSourceTypeEnum string

const (
	RestoreInfoSourceTypeEnumTypeUnspecified RestoreInfoSourceTypeEnum = "TYPE_UNSPECIFIED"
	RestoreInfoSourceTypeEnumBackup          RestoreInfoSourceTypeEnum = "BACKUP"
)

type RestoreInfo struct {
	BackupInfo *BackupInfo                `json:"backupInfo,omitempty"`
	SourceType *RestoreInfoSourceTypeEnum `json:"sourceType,omitempty"`
}
