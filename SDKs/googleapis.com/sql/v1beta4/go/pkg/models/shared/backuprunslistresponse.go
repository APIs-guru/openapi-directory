package shared

type BackupRunsListResponse struct {
	Items         []BackupRun `json:"items"`
	Kind          *string     `json:"kind"`
	NextPageToken *string     `json:"nextPageToken"`
}
