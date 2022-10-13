package shared

type GoogleCloudDatalabelingV1beta1FeedbackMessage struct {
	Body                      *string                `json:"body"`
	CreateTime                *string                `json:"createTime"`
	Image                     *string                `json:"image"`
	Name                      *string                `json:"name"`
	OperatorFeedbackMetadata  map[string]interface{} `json:"operatorFeedbackMetadata"`
	RequesterFeedbackMetadata map[string]interface{} `json:"requesterFeedbackMetadata"`
}
