package shared

type ListBackupOperationsResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Operations    []Operation `json:"operations"`
}
