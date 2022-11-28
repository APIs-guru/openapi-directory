package shared

// GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse
// Results for listing FeedbackThreads.
type GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse struct {
	FeedbackThreads []GoogleCloudDatalabelingV1beta1FeedbackThread `json:"feedbackThreads,omitempty"`
	NextPageToken   *string                                        `json:"nextPageToken,omitempty"`
}
