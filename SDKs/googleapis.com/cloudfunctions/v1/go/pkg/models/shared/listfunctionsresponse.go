package shared

type ListFunctionsResponse struct {
	Functions     []CloudFunction `json:"functions"`
	NextPageToken *string         `json:"nextPageToken"`
	Unreachable   []string        `json:"unreachable"`
}
