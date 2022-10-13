package shared

type GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse struct {
	ContextSize       *int32                                         `json:"contextSize"`
	LatestMessage     *string                                        `json:"latestMessage"`
	SmartReplyAnswers []GoogleCloudDialogflowV2beta1SmartReplyAnswer `json:"smartReplyAnswers"`
}
