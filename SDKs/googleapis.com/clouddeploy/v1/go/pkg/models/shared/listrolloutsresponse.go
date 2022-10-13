package shared

type ListRolloutsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Rollouts      []Rollout `json:"rollouts"`
	Unreachable   []string  `json:"unreachable"`
}
