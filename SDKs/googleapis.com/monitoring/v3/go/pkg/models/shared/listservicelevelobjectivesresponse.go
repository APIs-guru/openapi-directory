package shared

// ListServiceLevelObjectivesResponse
// The ListServiceLevelObjectives response.
type ListServiceLevelObjectivesResponse struct {
	NextPageToken          *string                 `json:"nextPageToken,omitempty"`
	ServiceLevelObjectives []ServiceLevelObjective `json:"serviceLevelObjectives,omitempty"`
}
