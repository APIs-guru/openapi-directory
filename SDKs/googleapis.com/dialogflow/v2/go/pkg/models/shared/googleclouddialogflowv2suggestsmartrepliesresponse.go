package shared

type GoogleCloudDialogflowV2SuggestSmartRepliesResponse struct {
	ContextSize       *int32                                    `json:"contextSize"`
	LatestMessage     *string                                   `json:"latestMessage"`
	SmartReplyAnswers []GoogleCloudDialogflowV2SmartReplyAnswer `json:"smartReplyAnswers"`
}
