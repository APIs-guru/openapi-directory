package shared

type GoogleCloudRetailV2CompletionDetail struct {
	CompletionAttributionToken *string `json:"completionAttributionToken,omitempty"`
	SelectedPosition           *int32  `json:"selectedPosition,omitempty"`
	SelectedSuggestion         *string `json:"selectedSuggestion,omitempty"`
}
