package shared

type RestoreInfoSourceTypeEnum string

const (
	RestoreInfoSourceTypeEnumTypeUnspecified RestoreInfoSourceTypeEnum = "TYPE_UNSPECIFIED"
	RestoreInfoSourceTypeEnumBackup          RestoreInfoSourceTypeEnum = "BACKUP"
)

type RestoreInfo struct {
	BackupInfo *BackupInfo                `json:"backupInfo"`
	SourceType *RestoreInfoSourceTypeEnum `json:"sourceType"`
}
