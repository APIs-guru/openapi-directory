package shared

type GoogleCloudRetailV2alphaCompletionDetail struct {
	CompletionAttributionToken *string `json:"completionAttributionToken"`
	SelectedPosition           *int32  `json:"selectedPosition"`
	SelectedSuggestion         *string `json:"selectedSuggestion"`
}
