package shared

// GoogleCloudDialogflowV2beta1Suggestion
// Represents a suggestion for a human agent.
type GoogleCloudDialogflowV2beta1Suggestion struct {
	Articles      []GoogleCloudDialogflowV2beta1SuggestionArticle   `json:"articles,omitempty"`
	CreateTime    *string                                           `json:"createTime,omitempty"`
	FaqAnswers    []GoogleCloudDialogflowV2beta1SuggestionFaqAnswer `json:"faqAnswers,omitempty"`
	LatestMessage *string                                           `json:"latestMessage,omitempty"`
	Name          *string                                           `json:"name,omitempty"`
}
