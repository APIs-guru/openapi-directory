package shared

// GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse
// The response of listing phrase matchers.
type GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse struct {
	NextPageToken  *string                                           `json:"nextPageToken,omitempty"`
	PhraseMatchers []GoogleCloudContactcenterinsightsV1PhraseMatcher `json:"phraseMatchers,omitempty"`
}
