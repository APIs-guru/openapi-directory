package shared

// BackupContext
// Backup context.
type BackupContext struct {
	BackupID *string `json:"backupId,omitempty"`
	Kind     *string `json:"kind,omitempty"`
}
