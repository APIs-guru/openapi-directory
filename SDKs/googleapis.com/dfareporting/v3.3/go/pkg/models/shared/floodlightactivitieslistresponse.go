package shared

// FloodlightActivitiesListResponse
// Floodlight Activity List Response
type FloodlightActivitiesListResponse struct {
	FloodlightActivities []FloodlightActivity `json:"floodlightActivities,omitempty"`
	Kind                 *string              `json:"kind,omitempty"`
	NextPageToken        *string              `json:"nextPageToken,omitempty"`
}
