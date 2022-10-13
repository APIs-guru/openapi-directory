package shared

type GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse struct {
	FeedbackThreads []GoogleCloudDatalabelingV1beta1FeedbackThread `json:"feedbackThreads"`
	NextPageToken   *string                                        `json:"nextPageToken"`
}
