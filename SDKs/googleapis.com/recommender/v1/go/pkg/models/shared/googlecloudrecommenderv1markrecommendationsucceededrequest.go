package shared

// GoogleCloudRecommenderV1MarkRecommendationSucceededRequest
// Request for the `MarkRecommendationSucceeded` Method.
type GoogleCloudRecommenderV1MarkRecommendationSucceededRequest struct {
	Etag          *string           `json:"etag,omitempty"`
	StateMetadata map[string]string `json:"stateMetadata,omitempty"`
}
