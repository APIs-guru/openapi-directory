package shared

type CopyBackupRequest struct {
	BackupID         *string                     `json:"backupId"`
	EncryptionConfig *CopyBackupEncryptionConfig `json:"encryptionConfig"`
	ExpireTime       *string                     `json:"expireTime"`
	SourceBackup     *string                     `json:"sourceBackup"`
}
