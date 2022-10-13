package shared

type GoogleCloudRetailV2betaCompletionDetail struct {
	CompletionAttributionToken *string `json:"completionAttributionToken"`
	SelectedPosition           *int32  `json:"selectedPosition"`
	SelectedSuggestion         *string `json:"selectedSuggestion"`
}
