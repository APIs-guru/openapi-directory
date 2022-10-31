package shared

type GoogleCloudRetailV2betaCompletionDetail struct {
	CompletionAttributionToken *string `json:"completionAttributionToken,omitempty"`
	SelectedPosition           *int32  `json:"selectedPosition,omitempty"`
	SelectedSuggestion         *string `json:"selectedSuggestion,omitempty"`
}
