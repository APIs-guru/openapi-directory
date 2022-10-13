package shared

type GoogleCloudRecommenderV1RecommendationStateInfoStateEnum string

const (
	GoogleCloudRecommenderV1RecommendationStateInfoStateEnumStateUnspecified GoogleCloudRecommenderV1RecommendationStateInfoStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudRecommenderV1RecommendationStateInfoStateEnumActive           GoogleCloudRecommenderV1RecommendationStateInfoStateEnum = "ACTIVE"
	GoogleCloudRecommenderV1RecommendationStateInfoStateEnumClaimed          GoogleCloudRecommenderV1RecommendationStateInfoStateEnum = "CLAIMED"
	GoogleCloudRecommenderV1RecommendationStateInfoStateEnumSucceeded        GoogleCloudRecommenderV1RecommendationStateInfoStateEnum = "SUCCEEDED"
	GoogleCloudRecommenderV1RecommendationStateInfoStateEnumFailed           GoogleCloudRecommenderV1RecommendationStateInfoStateEnum = "FAILED"
	GoogleCloudRecommenderV1RecommendationStateInfoStateEnumDismissed        GoogleCloudRecommenderV1RecommendationStateInfoStateEnum = "DISMISSED"
)

type GoogleCloudRecommenderV1RecommendationStateInfo struct {
	State         *GoogleCloudRecommenderV1RecommendationStateInfoStateEnum `json:"state"`
	StateMetadata map[string]string                                         `json:"stateMetadata"`
}
