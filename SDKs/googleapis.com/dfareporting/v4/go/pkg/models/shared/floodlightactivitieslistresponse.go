package shared



type FloodlightActivitiesListResponse struct {
    FloodlightActivities []FloodlightActivity `json:"floodlightActivities,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

