package shared

// ListBackupsResponse
// Response message for DataprocMetastore.ListBackups.
type ListBackupsResponse struct {
	Backups       []Backup `json:"backups,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
