package shared

type CopyBackupRequest struct {
	BackupID         *string                     `json:"backupId,omitempty"`
	EncryptionConfig *CopyBackupEncryptionConfig `json:"encryptionConfig,omitempty"`
	ExpireTime       *string                     `json:"expireTime,omitempty"`
	SourceBackup     *string                     `json:"sourceBackup,omitempty"`
}
