package shared

type FloodlightActivitiesListResponse struct {
	FloodlightActivities []FloodlightActivity `json:"floodlightActivities"`
	Kind                 *string              `json:"kind"`
	NextPageToken        *string              `json:"nextPageToken"`
}
