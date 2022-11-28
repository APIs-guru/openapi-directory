package shared

// ListBackupsResponse
// ListBackupsResponse is the response message for ListBackups method.
type ListBackupsResponse struct {
	Backups       []Backup `json:"backups,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
