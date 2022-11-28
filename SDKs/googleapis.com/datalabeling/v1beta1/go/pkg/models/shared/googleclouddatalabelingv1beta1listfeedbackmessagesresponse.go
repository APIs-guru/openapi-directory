package shared

// GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse
// Results for listing FeedbackMessages.
type GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse struct {
	FeedbackMessages []GoogleCloudDatalabelingV1beta1FeedbackMessage `json:"feedbackMessages,omitempty"`
	NextPageToken    *string                                         `json:"nextPageToken,omitempty"`
}
