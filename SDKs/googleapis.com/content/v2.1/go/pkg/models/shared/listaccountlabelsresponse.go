package shared

// ListAccountLabelsResponse
// Response message for the `ListAccountLabels` method.
type ListAccountLabelsResponse struct {
	AccountLabels []AccountLabel `json:"accountLabels,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
