package shared

// GoogleCloudDialogflowV2SuggestSmartRepliesResponse
// The response message for Participants.SuggestSmartReplies.
type GoogleCloudDialogflowV2SuggestSmartRepliesResponse struct {
	ContextSize       *int32                                    `json:"contextSize,omitempty"`
	LatestMessage     *string                                   `json:"latestMessage,omitempty"`
	SmartReplyAnswers []GoogleCloudDialogflowV2SmartReplyAnswer `json:"smartReplyAnswers,omitempty"`
}
