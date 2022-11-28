package shared

// GoogleCloudRetailV2CompletionDetail
// Detailed completion information including completion attribution token and clicked completion info.
type GoogleCloudRetailV2CompletionDetail struct {
	CompletionAttributionToken *string `json:"completionAttributionToken,omitempty"`
	SelectedPosition           *int32  `json:"selectedPosition,omitempty"`
	SelectedSuggestion         *string `json:"selectedSuggestion,omitempty"`
}
