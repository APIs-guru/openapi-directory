package shared

// ListCasesResponse
// The response message for the ListCases endpoint.
type ListCasesResponse struct {
	Cases         []Case  `json:"cases,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
