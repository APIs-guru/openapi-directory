package shared

// GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse
// The response message for Conversations.SuggestConversationSummary.
type GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse struct {
	ContextSize   *int32                                                                 `json:"contextSize,omitempty"`
	LatestMessage *string                                                                `json:"latestMessage,omitempty"`
	Summary       *GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary `json:"summary,omitempty"`
}
