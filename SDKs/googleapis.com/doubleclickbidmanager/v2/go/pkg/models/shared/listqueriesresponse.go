package shared

type ListQueriesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Queries       []Query `json:"queries,omitempty"`
}
