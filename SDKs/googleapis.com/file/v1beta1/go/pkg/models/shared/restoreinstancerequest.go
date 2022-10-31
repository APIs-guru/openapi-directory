package shared



type RestoreInstanceRequest struct {
    FileShare *string `json:"fileShare,omitempty"`
    SourceBackup *string `json:"sourceBackup,omitempty"`
    SourceSnapshot *string `json:"sourceSnapshot,omitempty"`
    
}

