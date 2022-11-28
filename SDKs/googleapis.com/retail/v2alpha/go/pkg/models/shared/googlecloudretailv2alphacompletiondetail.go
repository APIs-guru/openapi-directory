package shared

// GoogleCloudRetailV2alphaCompletionDetail
// Detailed completion information including completion attribution token and clicked completion info.
type GoogleCloudRetailV2alphaCompletionDetail struct {
	CompletionAttributionToken *string `json:"completionAttributionToken,omitempty"`
	SelectedPosition           *int32  `json:"selectedPosition,omitempty"`
	SelectedSuggestion         *string `json:"selectedSuggestion,omitempty"`
}
