package shared

type GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput struct {
	EnableSentimentAnalysis *bool                                     `json:"enableSentimentAnalysis"`
	InjectedParameters      map[string]interface{}                    `json:"injectedParameters"`
	Input                   *GoogleCloudDialogflowCxV3beta1QueryInput `json:"input"`
	IsWebhookEnabled        *bool                                     `json:"isWebhookEnabled"`
}
