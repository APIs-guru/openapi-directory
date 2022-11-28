package shared

// ListRolloutsResponse
// ListRolloutsResponse is the response object reutrned by `ListRollouts`.
type ListRolloutsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Rollouts      []Rollout `json:"rollouts,omitempty"`
	Unreachable   []string  `json:"unreachable,omitempty"`
}
