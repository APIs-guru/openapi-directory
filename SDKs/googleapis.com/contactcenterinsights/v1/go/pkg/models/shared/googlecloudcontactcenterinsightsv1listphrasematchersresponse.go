package shared

type GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse struct {
	NextPageToken  *string                                           `json:"nextPageToken"`
	PhraseMatchers []GoogleCloudContactcenterinsightsV1PhraseMatcher `json:"phraseMatchers"`
}
