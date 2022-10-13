package shared

type ListServiceRolloutsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Rollouts      []Rollout `json:"rollouts"`
}
