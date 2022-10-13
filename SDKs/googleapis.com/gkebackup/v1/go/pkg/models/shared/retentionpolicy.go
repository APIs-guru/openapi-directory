package shared

type RetentionPolicy struct {
	BackupDeleteLockDays *int32 `json:"backupDeleteLockDays"`
	BackupRetainDays     *int32 `json:"backupRetainDays"`
	Locked               *bool  `json:"locked"`
}
