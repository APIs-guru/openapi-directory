package shared

type RestoreBackupContext struct {
	BackupRunID *string `json:"backupRunId,omitempty"`
	InstanceID  *string `json:"instanceId,omitempty"`
	Kind        *string `json:"kind,omitempty"`
	Project     *string `json:"project,omitempty"`
}
