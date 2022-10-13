package shared

type GoogleCloudRecommenderV1MarkRecommendationClaimedRequest struct {
	Etag          *string           `json:"etag"`
	StateMetadata map[string]string `json:"stateMetadata"`
}
