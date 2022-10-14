package shared

type ListFunctionsResponse struct {
	Functions     []CloudFunction `json:"functions,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	Unreachable   []string        `json:"unreachable,omitempty"`
}
