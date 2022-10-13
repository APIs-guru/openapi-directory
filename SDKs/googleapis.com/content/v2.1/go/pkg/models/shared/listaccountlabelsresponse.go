package shared

type ListAccountLabelsResponse struct {
	AccountLabels []AccountLabel `json:"accountLabels"`
	NextPageToken *string        `json:"nextPageToken"`
}
