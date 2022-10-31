package shared

type GoogleCloudDialogflowV2SuggestFaqAnswersResponse struct {
	ContextSize   *int32                             `json:"contextSize,omitempty"`
	FaqAnswers    []GoogleCloudDialogflowV2FaqAnswer `json:"faqAnswers,omitempty"`
	LatestMessage *string                            `json:"latestMessage,omitempty"`
}
