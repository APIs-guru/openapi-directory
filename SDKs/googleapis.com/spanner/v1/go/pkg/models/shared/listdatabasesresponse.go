package shared

// ListDatabasesResponse
// The response for ListDatabases.
type ListDatabasesResponse struct {
	Databases     []Database `json:"databases,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
