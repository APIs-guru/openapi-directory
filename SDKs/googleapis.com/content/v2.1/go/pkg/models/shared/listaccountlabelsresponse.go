package shared

type ListAccountLabelsResponse struct {
	AccountLabels []AccountLabel `json:"accountLabels,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
