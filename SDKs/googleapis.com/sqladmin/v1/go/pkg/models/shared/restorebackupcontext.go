package shared

type RestoreBackupContext struct {
	BackupRunID *string `json:"backupRunId"`
	InstanceID  *string `json:"instanceId"`
	Kind        *string `json:"kind"`
	Project     *string `json:"project"`
}
