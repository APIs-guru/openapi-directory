package shared

type ListStepAccessibilityClustersResponse struct {
	Clusters []SuggestionClusterProto `json:"clusters"`
	Name     *string                  `json:"name"`
}
