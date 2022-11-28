package shared

// ListQueriesResponse
// List queries response.
type ListQueriesResponse struct {
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Queries       []Query `json:"queries,omitempty"`
}
