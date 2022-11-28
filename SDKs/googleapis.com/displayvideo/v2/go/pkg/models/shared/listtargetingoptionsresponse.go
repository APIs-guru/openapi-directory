package shared

// ListTargetingOptionsResponse
// Response message for ListTargetingOptions.
type ListTargetingOptionsResponse struct {
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	TargetingOptions []TargetingOption `json:"targetingOptions,omitempty"`
}
