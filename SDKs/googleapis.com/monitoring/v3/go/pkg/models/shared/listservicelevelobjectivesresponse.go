package shared

type ListServiceLevelObjectivesResponse struct {
	NextPageToken          *string                 `json:"nextPageToken,omitempty"`
	ServiceLevelObjectives []ServiceLevelObjective `json:"serviceLevelObjectives,omitempty"`
}
