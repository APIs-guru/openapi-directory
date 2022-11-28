package shared

// ListInstanceConfigOperationsResponse
// The response for ListInstanceConfigOperations.
type ListInstanceConfigOperationsResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Operations    []Operation `json:"operations,omitempty"`
}
