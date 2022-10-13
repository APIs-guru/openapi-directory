package shared

type BackupContext struct {
	BackupID *string `json:"backupId"`
	Kind     *string `json:"kind"`
}
