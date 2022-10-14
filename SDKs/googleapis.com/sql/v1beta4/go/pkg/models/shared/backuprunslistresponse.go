package shared

type BackupRunsListResponse struct {
	Items         []BackupRun `json:"items,omitempty"`
	Kind          *string     `json:"kind,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
