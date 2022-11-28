package shared

// GoogleCloudDatalabelingV1beta1FeedbackMessage
// A feedback message inside a feedback thread.
type GoogleCloudDatalabelingV1beta1FeedbackMessage struct {
	Body                      *string                `json:"body,omitempty"`
	CreateTime                *string                `json:"createTime,omitempty"`
	Image                     *string                `json:"image,omitempty"`
	Name                      *string                `json:"name,omitempty"`
	OperatorFeedbackMetadata  map[string]interface{} `json:"operatorFeedbackMetadata,omitempty"`
	RequesterFeedbackMetadata map[string]interface{} `json:"requesterFeedbackMetadata,omitempty"`
}
