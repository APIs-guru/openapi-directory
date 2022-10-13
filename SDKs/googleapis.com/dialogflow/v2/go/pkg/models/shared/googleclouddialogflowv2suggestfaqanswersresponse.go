package shared

type GoogleCloudDialogflowV2SuggestFaqAnswersResponse struct {
	ContextSize   *int32                             `json:"contextSize"`
	FaqAnswers    []GoogleCloudDialogflowV2FaqAnswer `json:"faqAnswers"`
	LatestMessage *string                            `json:"latestMessage"`
}
