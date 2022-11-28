package shared

// GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest
// Request for the `MarkRecommendationFailed` Method.
type GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest struct {
	Etag          *string           `json:"etag,omitempty"`
	StateMetadata map[string]string `json:"stateMetadata,omitempty"`
}
