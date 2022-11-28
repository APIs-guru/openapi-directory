package shared

// RestoreInstanceRequest
// RestoreInstanceRequest restores an existing instance's file share from a snapshot or backup.
type RestoreInstanceRequest struct {
	FileShare      *string `json:"fileShare,omitempty"`
	SourceBackup   *string `json:"sourceBackup,omitempty"`
	SourceSnapshot *string `json:"sourceSnapshot,omitempty"`
}
