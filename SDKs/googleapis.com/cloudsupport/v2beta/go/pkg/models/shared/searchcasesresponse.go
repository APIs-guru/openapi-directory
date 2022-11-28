package shared

// SearchCasesResponse
// The response message for the SearchCases endpoint.
type SearchCasesResponse struct {
	Cases         []Case  `json:"cases,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
