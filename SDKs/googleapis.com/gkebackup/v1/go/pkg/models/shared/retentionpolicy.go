package shared



type RetentionPolicy struct {
    BackupDeleteLockDays *int32 `json:"backupDeleteLockDays,omitempty"`
    BackupRetainDays *int32 `json:"backupRetainDays,omitempty"`
    Locked *bool `json:"locked,omitempty"`
    
}

