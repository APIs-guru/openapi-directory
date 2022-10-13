package shared

type ListTargetingOptionsResponse struct {
	NextPageToken    *string           `json:"nextPageToken"`
	TargetingOptions []TargetingOption `json:"targetingOptions"`
}
