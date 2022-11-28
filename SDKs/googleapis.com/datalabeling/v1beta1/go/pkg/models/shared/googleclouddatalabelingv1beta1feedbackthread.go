package shared

// GoogleCloudDatalabelingV1beta1FeedbackThread
// A feedback thread of a certain labeling task on a certain annotated dataset.
type GoogleCloudDatalabelingV1beta1FeedbackThread struct {
	FeedbackThreadMetadata *GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata `json:"feedbackThreadMetadata,omitempty"`
	Name                   *string                                               `json:"name,omitempty"`
}
