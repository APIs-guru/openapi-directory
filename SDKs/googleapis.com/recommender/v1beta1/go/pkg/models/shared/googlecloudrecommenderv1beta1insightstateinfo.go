package shared




type GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum string

const (
    GoogleCloudRecommenderV1beta1InsightStateInfoStateEnumStateUnspecified GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum = "STATE_UNSPECIFIED"
GoogleCloudRecommenderV1beta1InsightStateInfoStateEnumActive GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum = "ACTIVE"
GoogleCloudRecommenderV1beta1InsightStateInfoStateEnumAccepted GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum = "ACCEPTED"
GoogleCloudRecommenderV1beta1InsightStateInfoStateEnumDismissed GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum = "DISMISSED"
)


type GoogleCloudRecommenderV1beta1InsightStateInfo struct {
    State *GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum `json:"state,omitempty"`
    StateMetadata map[string]string `json:"stateMetadata,omitempty"`
    
}

