package shared

type GoogleCloudDialogflowV2ConversationModelEvaluation struct {
	CreateTime        *string                                   `json:"createTime,omitempty"`
	DisplayName       *string                                   `json:"displayName,omitempty"`
	EvaluationConfig  *GoogleCloudDialogflowV2EvaluationConfig  `json:"evaluationConfig,omitempty"`
	Name              *string                                   `json:"name,omitempty"`
	SmartReplyMetrics *GoogleCloudDialogflowV2SmartReplyMetrics `json:"smartReplyMetrics,omitempty"`
}
