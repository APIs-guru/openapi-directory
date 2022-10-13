package shared

type GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest struct {
	Etag          *string           `json:"etag"`
	StateMetadata map[string]string `json:"stateMetadata"`
}
