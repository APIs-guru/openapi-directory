package shared

type GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse struct {
	FeedbackMessages []GoogleCloudDatalabelingV1beta1FeedbackMessage `json:"feedbackMessages"`
	NextPageToken    *string                                         `json:"nextPageToken"`
}
