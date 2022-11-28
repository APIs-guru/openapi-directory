package shared

// GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult
// RecommendationResult represents a generic recommendation result with associated metadata.
type GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult struct {
	Document *GoogleCloudDiscoveryengineV1betaDocument `json:"document,omitempty"`
	ID       *string                                   `json:"id,omitempty"`
	Metadata map[string]interface{}                    `json:"metadata,omitempty"`
}
