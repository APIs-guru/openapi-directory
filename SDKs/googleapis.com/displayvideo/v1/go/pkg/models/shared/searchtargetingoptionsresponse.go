package shared

type SearchTargetingOptionsResponse struct {
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	TargetingOptions []TargetingOption `json:"targetingOptions,omitempty"`
}
