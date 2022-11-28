package shared

// CopyBackupRequest
// The request for CopyBackup.
type CopyBackupRequest struct {
	BackupID     *string `json:"backupId,omitempty"`
	ExpireTime   *string `json:"expireTime,omitempty"`
	SourceBackup *string `json:"sourceBackup,omitempty"`
}
