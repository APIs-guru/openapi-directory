package shared



type GoogleCloudDialogflowV2SmartReplyMetrics struct {
    AllowlistCoverage *float32 `json:"allowlistCoverage,omitempty"`
    ConversationCount *string `json:"conversationCount,omitempty"`
    TopNMetrics []GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics `json:"topNMetrics,omitempty"`
    
}

