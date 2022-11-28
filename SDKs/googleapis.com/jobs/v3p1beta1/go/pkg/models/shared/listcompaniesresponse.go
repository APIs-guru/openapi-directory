package shared

// ListCompaniesResponse
// Output only. The List companies response object.
type ListCompaniesResponse struct {
	Companies     []Company         `json:"companies,omitempty"`
	Metadata      *ResponseMetadata `json:"metadata,omitempty"`
	NextPageToken *string           `json:"nextPageToken,omitempty"`
}
