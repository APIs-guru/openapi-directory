package shared

type ListFunctionsResponse struct {
	Functions     []Function `json:"functions"`
	NextPageToken *string    `json:"nextPageToken"`
	Unreachable   []string   `json:"unreachable"`
}
