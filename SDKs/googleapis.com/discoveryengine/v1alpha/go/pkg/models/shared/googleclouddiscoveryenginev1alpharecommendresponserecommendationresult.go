package shared

// GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult
// RecommendationResult represents a generic recommendation result with associated metadata.
type GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult struct {
	Document *GoogleCloudDiscoveryengineV1alphaDocument `json:"document,omitempty"`
	ID       *string                                    `json:"id,omitempty"`
	Metadata map[string]interface{}                     `json:"metadata,omitempty"`
}
