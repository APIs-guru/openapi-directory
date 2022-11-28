package shared

// GoogleCloudRecommenderV1MarkInsightAcceptedRequest
// Request for the `MarkInsightAccepted` method.
type GoogleCloudRecommenderV1MarkInsightAcceptedRequest struct {
	Etag          *string           `json:"etag,omitempty"`
	StateMetadata map[string]string `json:"stateMetadata,omitempty"`
}
