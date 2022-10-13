package shared

type GoogleCloudRecommenderV1MarkRecommendationFailedRequest struct {
	Etag          *string           `json:"etag"`
	StateMetadata map[string]string `json:"stateMetadata"`
}
