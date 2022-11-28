package shared

// RestoreInfo1
// Information about a table restore.
type RestoreInfo1 struct {
	BackupInfo *BackupInfo                `json:"backupInfo,omitempty"`
	SourceType *RestoreInfoSourceTypeEnum `json:"sourceType,omitempty"`
}
