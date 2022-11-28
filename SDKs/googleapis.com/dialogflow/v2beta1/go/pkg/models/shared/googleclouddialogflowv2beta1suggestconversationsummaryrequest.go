package shared

// GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest
// The request message for Conversations.SuggestConversationSummary.
type GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest struct {
	ContextSize   *int32  `json:"contextSize,omitempty"`
	LatestMessage *string `json:"latestMessage,omitempty"`
}
