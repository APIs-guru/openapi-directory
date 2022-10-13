package shared

type GoogleCloudDialogflowV2EvaluationConfig struct {
	Datasets           []GoogleCloudDialogflowV2InputDataset                      `json:"datasets"`
	SmartComposeConfig *GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig `json:"smartComposeConfig"`
	SmartReplyConfig   *GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig   `json:"smartReplyConfig"`
}
