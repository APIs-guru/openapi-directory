package shared



type ListServiceRolloutsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Rollouts []Rollout `json:"rollouts,omitempty"`
    
}

