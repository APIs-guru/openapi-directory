package shared



type GoogleCloudDialogflowV2DetectIntentResponse struct {
    OutputAudio *string `json:"outputAudio,omitempty"`
    OutputAudioConfig *GoogleCloudDialogflowV2OutputAudioConfig `json:"outputAudioConfig,omitempty"`
    QueryResult *GoogleCloudDialogflowV2QueryResult `json:"queryResult,omitempty"`
    ResponseID *string `json:"responseId,omitempty"`
    WebhookStatus *GoogleRPCStatus `json:"webhookStatus,omitempty"`
    
}

