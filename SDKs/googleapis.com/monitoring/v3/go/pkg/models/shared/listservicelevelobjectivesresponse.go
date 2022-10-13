package shared

type ListServiceLevelObjectivesResponse struct {
	NextPageToken          *string                 `json:"nextPageToken"`
	ServiceLevelObjectives []ServiceLevelObjective `json:"serviceLevelObjectives"`
}
