package shared

type GoogleCloudDialogflowV2AnswerRecord struct {
	AgentAssistantRecord *GoogleCloudDialogflowV2AgentAssistantRecord `json:"agentAssistantRecord"`
	AnswerFeedback       *GoogleCloudDialogflowV2AnswerFeedback       `json:"answerFeedback"`
	Name                 *string                                      `json:"name"`
}
