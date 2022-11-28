package shared

// GoogleCloudDiscoveryengineV1alphaCompletionInfo
// Detailed completion information including completion attribution token and clicked completion info.
type GoogleCloudDiscoveryengineV1alphaCompletionInfo struct {
	SelectedPosition   *int32  `json:"selectedPosition,omitempty"`
	SelectedSuggestion *string `json:"selectedSuggestion,omitempty"`
}
