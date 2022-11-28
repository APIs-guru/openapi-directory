package shared

type RestoreInfoSourceTypeEnum string

const (
	RestoreInfoSourceTypeEnumRestoreSourceTypeUnspecified RestoreInfoSourceTypeEnum = "RESTORE_SOURCE_TYPE_UNSPECIFIED"
	RestoreInfoSourceTypeEnumBackup                       RestoreInfoSourceTypeEnum = "BACKUP"
)

// RestoreInfo
// Information about a table restore.
type RestoreInfo struct {
	SourceType *RestoreInfoSourceTypeEnum `json:"sourceType,omitempty"`
}
