package shared

// GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse
// The response message for Participants.SuggestSmartReplies.
type GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse struct {
	ContextSize       *int32                                         `json:"contextSize,omitempty"`
	LatestMessage     *string                                        `json:"latestMessage,omitempty"`
	SmartReplyAnswers []GoogleCloudDialogflowV2beta1SmartReplyAnswer `json:"smartReplyAnswers,omitempty"`
}
