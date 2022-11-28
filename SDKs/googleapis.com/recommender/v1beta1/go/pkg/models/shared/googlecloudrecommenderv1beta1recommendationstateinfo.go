package shared

type GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum string

const (
	GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnumStateUnspecified GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnumActive           GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum = "ACTIVE"
	GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnumClaimed          GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum = "CLAIMED"
	GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnumSucceeded        GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum = "SUCCEEDED"
	GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnumFailed           GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum = "FAILED"
	GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnumDismissed        GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum = "DISMISSED"
)

// GoogleCloudRecommenderV1beta1RecommendationStateInfo
// Information for state. Contains state and metadata.
type GoogleCloudRecommenderV1beta1RecommendationStateInfo struct {
	State         *GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum `json:"state,omitempty"`
	StateMetadata map[string]string                                              `json:"stateMetadata,omitempty"`
}
