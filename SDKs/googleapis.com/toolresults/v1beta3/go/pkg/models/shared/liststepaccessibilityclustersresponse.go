package shared

type ListStepAccessibilityClustersResponse struct {
	Clusters []SuggestionClusterProto `json:"clusters,omitempty"`
	Name     *string                  `json:"name,omitempty"`
}
