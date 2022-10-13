package shared

type GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse struct {
	ContextSize   *int32                                  `json:"contextSize"`
	FaqAnswers    []GoogleCloudDialogflowV2beta1FaqAnswer `json:"faqAnswers"`
	LatestMessage *string                                 `json:"latestMessage"`
}
