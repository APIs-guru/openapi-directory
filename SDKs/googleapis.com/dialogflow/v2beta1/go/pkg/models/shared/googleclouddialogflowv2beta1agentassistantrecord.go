package shared

// GoogleCloudDialogflowV2beta1AgentAssistantRecord
// Represents a record of a human agent assistant answer.
type GoogleCloudDialogflowV2beta1AgentAssistantRecord struct {
	ArticleSuggestionAnswer *GoogleCloudDialogflowV2beta1ArticleAnswer `json:"articleSuggestionAnswer,omitempty"`
	FaqAnswer               *GoogleCloudDialogflowV2beta1FaqAnswer     `json:"faqAnswer,omitempty"`
}
