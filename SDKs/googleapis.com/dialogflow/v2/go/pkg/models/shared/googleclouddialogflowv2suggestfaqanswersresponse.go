package shared

// GoogleCloudDialogflowV2SuggestFaqAnswersResponse
// The request message for Participants.SuggestFaqAnswers.
type GoogleCloudDialogflowV2SuggestFaqAnswersResponse struct {
	ContextSize   *int32                             `json:"contextSize,omitempty"`
	FaqAnswers    []GoogleCloudDialogflowV2FaqAnswer `json:"faqAnswers,omitempty"`
	LatestMessage *string                            `json:"latestMessage,omitempty"`
}
