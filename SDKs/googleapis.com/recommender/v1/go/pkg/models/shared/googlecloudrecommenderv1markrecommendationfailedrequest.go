package shared

// GoogleCloudRecommenderV1MarkRecommendationFailedRequest
// Request for the `MarkRecommendationFailed` Method.
type GoogleCloudRecommenderV1MarkRecommendationFailedRequest struct {
	Etag          *string           `json:"etag,omitempty"`
	StateMetadata map[string]string `json:"stateMetadata,omitempty"`
}
