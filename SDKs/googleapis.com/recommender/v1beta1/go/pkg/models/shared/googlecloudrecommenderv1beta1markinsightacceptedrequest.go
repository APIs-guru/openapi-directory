package shared

// GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest
// Request for the `MarkInsightAccepted` method.
type GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest struct {
	Etag          *string           `json:"etag,omitempty"`
	StateMetadata map[string]string `json:"stateMetadata,omitempty"`
}
