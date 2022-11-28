package shared

// GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics
// Evaluation metrics when retrieving `n` smart replies with the model.
type GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics struct {
	N      *int32   `json:"n,omitempty"`
	Recall *float32 `json:"recall,omitempty"`
}
