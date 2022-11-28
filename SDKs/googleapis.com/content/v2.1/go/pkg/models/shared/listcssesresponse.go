package shared

// ListCssesResponse
// The response message for the `ListCsses` method
type ListCssesResponse struct {
	Csses         []CSS   `json:"csses,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
