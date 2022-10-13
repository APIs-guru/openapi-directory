package shared

type GoogleCloudDialogflowV2SmartReplyMetrics struct {
	AllowlistCoverage *float32                                              `json:"allowlistCoverage"`
	ConversationCount *string                                               `json:"conversationCount"`
	TopNMetrics       []GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics `json:"topNMetrics"`
}
