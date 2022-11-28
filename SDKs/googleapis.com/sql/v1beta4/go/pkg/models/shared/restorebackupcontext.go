package shared

// RestoreBackupContext
// Database instance restore from backup context. Backup context contains source instance id and project id.
type RestoreBackupContext struct {
	BackupRunID *string `json:"backupRunId,omitempty"`
	InstanceID  *string `json:"instanceId,omitempty"`
	Kind        *string `json:"kind,omitempty"`
	Project     *string `json:"project,omitempty"`
}
