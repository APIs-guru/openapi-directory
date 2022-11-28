package shared

// ListStepAccessibilityClustersResponse
// Response message for AccessibilityService.ListStepAccessibilityClusters.
type ListStepAccessibilityClustersResponse struct {
	Clusters []SuggestionClusterProto `json:"clusters,omitempty"`
	Name     *string                  `json:"name,omitempty"`
}
