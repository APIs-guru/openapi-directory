package shared

// GoogleCloudDiscoveryengineV1betaCompletionInfo
// Detailed completion information including completion attribution token and clicked completion info.
type GoogleCloudDiscoveryengineV1betaCompletionInfo struct {
	SelectedPosition   *int32  `json:"selectedPosition,omitempty"`
	SelectedSuggestion *string `json:"selectedSuggestion,omitempty"`
}
