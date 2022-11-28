package shared

// ListBackupsResponse
// ListBackupsResponse is the result of ListBackupsRequest.
type ListBackupsResponse struct {
	Backups       []Backup `json:"backups,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
