package shared

type ListQueriesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Queries       []Query `json:"queries"`
}
