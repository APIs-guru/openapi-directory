package shared

type ListQueriesResponse struct {
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Queries       []Query `json:"queries,omitempty"`
}
