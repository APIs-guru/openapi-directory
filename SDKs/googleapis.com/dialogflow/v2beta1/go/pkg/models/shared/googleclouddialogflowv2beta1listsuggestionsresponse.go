package shared

type GoogleCloudDialogflowV2beta1ListSuggestionsResponse struct {
	NextPageToken *string                                  `json:"nextPageToken"`
	Suggestions   []GoogleCloudDialogflowV2beta1Suggestion `json:"suggestions"`
}
