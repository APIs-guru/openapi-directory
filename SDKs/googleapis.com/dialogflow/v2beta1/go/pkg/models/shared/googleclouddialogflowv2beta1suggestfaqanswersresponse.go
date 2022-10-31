package shared



type GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse struct {
    ContextSize *int32 `json:"contextSize,omitempty"`
    FaqAnswers []GoogleCloudDialogflowV2beta1FaqAnswer `json:"faqAnswers,omitempty"`
    LatestMessage *string `json:"latestMessage,omitempty"`
    
}

