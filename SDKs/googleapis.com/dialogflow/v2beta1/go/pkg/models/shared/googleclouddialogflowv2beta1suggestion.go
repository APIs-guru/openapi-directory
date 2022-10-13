package shared

type GoogleCloudDialogflowV2beta1Suggestion struct {
	Articles      []GoogleCloudDialogflowV2beta1SuggestionArticle   `json:"articles"`
	CreateTime    *string                                           `json:"createTime"`
	FaqAnswers    []GoogleCloudDialogflowV2beta1SuggestionFaqAnswer `json:"faqAnswers"`
	LatestMessage *string                                           `json:"latestMessage"`
	Name          *string                                           `json:"name"`
}
