package shared

// ListBackupOperationsResponse
// The response for ListBackupOperations.
type ListBackupOperationsResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Operations    []Operation `json:"operations,omitempty"`
}
