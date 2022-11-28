package shared

// GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary
// Generated summary for a conversation.
type GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary struct {
	AnswerRecord *string           `json:"answerRecord,omitempty"`
	Text         *string           `json:"text,omitempty"`
	TextSections map[string]string `json:"textSections,omitempty"`
}
