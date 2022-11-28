package shared

// SearchTargetingOptionsResponse
// Response message for SearchTargetingOptions.
type SearchTargetingOptionsResponse struct {
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	TargetingOptions []TargetingOption `json:"targetingOptions,omitempty"`
}
