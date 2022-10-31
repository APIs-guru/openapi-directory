package shared

type ListFunctionsResponse struct {
	Functions     []Function `json:"functions,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
