package shared

// ListFeaturesResponse
// Response message for the `GkeHub.ListFeatures` method.
type ListFeaturesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Resources     []Feature `json:"resources,omitempty"`
}
