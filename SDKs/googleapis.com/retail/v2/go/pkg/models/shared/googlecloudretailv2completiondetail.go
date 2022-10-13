package shared

type GoogleCloudRetailV2CompletionDetail struct {
	CompletionAttributionToken *string `json:"completionAttributionToken"`
	SelectedPosition           *int32  `json:"selectedPosition"`
	SelectedSuggestion         *string `json:"selectedSuggestion"`
}
