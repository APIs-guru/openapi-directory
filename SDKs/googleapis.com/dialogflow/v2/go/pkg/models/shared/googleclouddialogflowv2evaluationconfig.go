package shared

// GoogleCloudDialogflowV2EvaluationConfig
// The configuration for model evaluation.
type GoogleCloudDialogflowV2EvaluationConfig struct {
	Datasets           []GoogleCloudDialogflowV2InputDataset                      `json:"datasets,omitempty"`
	SmartComposeConfig *GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig `json:"smartComposeConfig,omitempty"`
	SmartReplyConfig   *GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig   `json:"smartReplyConfig,omitempty"`
}
