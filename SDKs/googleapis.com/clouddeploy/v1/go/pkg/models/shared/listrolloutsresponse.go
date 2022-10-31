package shared



type ListRolloutsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Rollouts []Rollout `json:"rollouts,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

