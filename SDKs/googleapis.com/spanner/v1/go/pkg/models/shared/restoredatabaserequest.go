package shared

type RestoreDatabaseRequest struct {
	Backup           *string                          `json:"backup"`
	DatabaseID       *string                          `json:"databaseId"`
	EncryptionConfig *RestoreDatabaseEncryptionConfig `json:"encryptionConfig"`
}
