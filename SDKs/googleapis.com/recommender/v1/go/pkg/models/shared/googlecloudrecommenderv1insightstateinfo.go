package shared

type GoogleCloudRecommenderV1InsightStateInfoStateEnum string

const (
	GoogleCloudRecommenderV1InsightStateInfoStateEnumStateUnspecified GoogleCloudRecommenderV1InsightStateInfoStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudRecommenderV1InsightStateInfoStateEnumActive           GoogleCloudRecommenderV1InsightStateInfoStateEnum = "ACTIVE"
	GoogleCloudRecommenderV1InsightStateInfoStateEnumAccepted         GoogleCloudRecommenderV1InsightStateInfoStateEnum = "ACCEPTED"
	GoogleCloudRecommenderV1InsightStateInfoStateEnumDismissed        GoogleCloudRecommenderV1InsightStateInfoStateEnum = "DISMISSED"
)

type GoogleCloudRecommenderV1InsightStateInfo struct {
	State         *GoogleCloudRecommenderV1InsightStateInfoStateEnum `json:"state"`
	StateMetadata map[string]string                                  `json:"stateMetadata"`
}
