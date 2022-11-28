package shared

// ListBackupsResponse
// Response message for ListBackups.
type ListBackupsResponse struct {
	Backups       []Backup `json:"backups,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
