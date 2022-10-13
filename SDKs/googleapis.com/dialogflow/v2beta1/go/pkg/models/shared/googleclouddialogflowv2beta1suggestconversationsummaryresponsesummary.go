package shared

type GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary struct {
	AnswerRecord *string           `json:"answerRecord"`
	Text         *string           `json:"text"`
	TextSections map[string]string `json:"textSections"`
}
