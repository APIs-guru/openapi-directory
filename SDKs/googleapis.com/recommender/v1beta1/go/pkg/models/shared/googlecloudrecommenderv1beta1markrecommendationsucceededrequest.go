package shared

// GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest
// Request for the `MarkRecommendationSucceeded` Method.
type GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest struct {
	Etag          *string           `json:"etag,omitempty"`
	StateMetadata map[string]string `json:"stateMetadata,omitempty"`
}
