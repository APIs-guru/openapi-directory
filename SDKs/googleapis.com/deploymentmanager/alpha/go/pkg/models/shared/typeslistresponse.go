package shared

// TypesListResponse
// A response that returns all Types supported by Deployment Manager
type TypesListResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Types         []Type  `json:"types,omitempty"`
}
