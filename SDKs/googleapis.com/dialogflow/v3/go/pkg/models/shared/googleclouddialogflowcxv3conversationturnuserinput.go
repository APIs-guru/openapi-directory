package shared



type GoogleCloudDialogflowCxV3ConversationTurnUserInput struct {
    EnableSentimentAnalysis *bool `json:"enableSentimentAnalysis,omitempty"`
    InjectedParameters map[string]interface{} `json:"injectedParameters,omitempty"`
    Input *GoogleCloudDialogflowCxV3QueryInput `json:"input,omitempty"`
    IsWebhookEnabled *bool `json:"isWebhookEnabled,omitempty"`
    
}

