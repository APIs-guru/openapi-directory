package shared

// GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest
// Request for the `MarkRecommendationClaimed` Method.
type GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest struct {
	Etag          *string           `json:"etag,omitempty"`
	StateMetadata map[string]string `json:"stateMetadata,omitempty"`
}
