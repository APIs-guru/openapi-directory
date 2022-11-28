package shared

// ListTagBindingsResponse
// The ListTagBindings response.
type ListTagBindingsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	TagBindings   []TagBinding `json:"tagBindings,omitempty"`
}
