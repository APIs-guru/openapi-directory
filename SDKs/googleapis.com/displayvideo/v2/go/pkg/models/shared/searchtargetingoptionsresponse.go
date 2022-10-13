package shared

type SearchTargetingOptionsResponse struct {
	NextPageToken    *string           `json:"nextPageToken"`
	TargetingOptions []TargetingOption `json:"targetingOptions"`
}
