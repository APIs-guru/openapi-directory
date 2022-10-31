package shared



type RestoreDatabaseRequest struct {
    Backup *string `json:"backup,omitempty"`
    DatabaseID *string `json:"databaseId,omitempty"`
    EncryptionConfig *RestoreDatabaseEncryptionConfig `json:"encryptionConfig,omitempty"`
    
}

