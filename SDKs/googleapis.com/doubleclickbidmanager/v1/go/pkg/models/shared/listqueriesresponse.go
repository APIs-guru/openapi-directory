package shared

type ListQueriesResponse struct {
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
	Queries       []Query `json:"queries"`
}
