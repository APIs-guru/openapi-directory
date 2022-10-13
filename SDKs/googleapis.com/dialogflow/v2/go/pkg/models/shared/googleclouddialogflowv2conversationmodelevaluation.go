package shared

type GoogleCloudDialogflowV2ConversationModelEvaluation struct {
	CreateTime        *string                                   `json:"createTime"`
	DisplayName       *string                                   `json:"displayName"`
	EvaluationConfig  *GoogleCloudDialogflowV2EvaluationConfig  `json:"evaluationConfig"`
	Name              *string                                   `json:"name"`
	SmartReplyMetrics *GoogleCloudDialogflowV2SmartReplyMetrics `json:"smartReplyMetrics"`
}
