package shared

type GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum string

const (
	GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumEventSourceUnspecified GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = "EVENT_SOURCE_UNSPECIFIED"
	GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumAutoml                 GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = "AUTOML"
	GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumEcommerce              GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = "ECOMMERCE"
	GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumBatchUpload            GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = "BATCH_UPLOAD"
)

type GoogleCloudRecommendationengineV1beta1UserEvent struct {
	EventDetail        *GoogleCloudRecommendationengineV1beta1EventDetail              `json:"eventDetail"`
	EventSource        *GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum `json:"eventSource"`
	EventTime          *string                                                         `json:"eventTime"`
	EventType          *string                                                         `json:"eventType"`
	ProductEventDetail *GoogleCloudRecommendationengineV1beta1ProductEventDetail       `json:"productEventDetail"`
	UserInfo           *GoogleCloudRecommendationengineV1beta1UserInfo                 `json:"userInfo"`
}
