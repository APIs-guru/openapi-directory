package shared

// ListServiceRolloutsResponse
// Response message for ListServiceRollouts method.
type ListServiceRolloutsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Rollouts      []Rollout `json:"rollouts,omitempty"`
}
