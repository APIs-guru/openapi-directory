package shared



type GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput struct {
    EnableSentimentAnalysis *bool `json:"enableSentimentAnalysis,omitempty"`
    InjectedParameters map[string]interface{} `json:"injectedParameters,omitempty"`
    Input *GoogleCloudDialogflowCxV3beta1QueryInput `json:"input,omitempty"`
    IsWebhookEnabled *bool `json:"isWebhookEnabled,omitempty"`
    
}

