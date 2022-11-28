package shared

// ListDatabaseOperationsResponse
// The response for ListDatabaseOperations.
type ListDatabaseOperationsResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Operations    []Operation `json:"operations,omitempty"`
}
