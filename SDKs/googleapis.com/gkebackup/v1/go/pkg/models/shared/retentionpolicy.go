package shared

// RetentionPolicy
// RetentionPolicy defines a Backup retention policy for a BackupPlan.
type RetentionPolicy struct {
	BackupDeleteLockDays *int32 `json:"backupDeleteLockDays,omitempty"`
	BackupRetainDays     *int32 `json:"backupRetainDays,omitempty"`
	Locked               *bool  `json:"locked,omitempty"`
}
