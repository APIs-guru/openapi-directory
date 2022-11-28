package shared

type GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum string

const (
	GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumEventSourceUnspecified GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = "EVENT_SOURCE_UNSPECIFIED"
	GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumAutoml                 GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = "AUTOML"
	GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumEcommerce              GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = "ECOMMERCE"
	GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumBatchUpload            GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = "BATCH_UPLOAD"
)

// GoogleCloudRecommendationengineV1beta1UserEvent
// UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
type GoogleCloudRecommendationengineV1beta1UserEvent struct {
	EventDetail        *GoogleCloudRecommendationengineV1beta1EventDetail              `json:"eventDetail,omitempty"`
	EventSource        *GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum `json:"eventSource,omitempty"`
	EventTime          *string                                                         `json:"eventTime,omitempty"`
	EventType          *string                                                         `json:"eventType,omitempty"`
	ProductEventDetail *GoogleCloudRecommendationengineV1beta1ProductEventDetail       `json:"productEventDetail,omitempty"`
	UserInfo           *GoogleCloudRecommendationengineV1beta1UserInfo                 `json:"userInfo,omitempty"`
}
