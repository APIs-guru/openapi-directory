package shared

type GoogleCloudDialogflowCxV3ConversationTurnUserInput struct {
	EnableSentimentAnalysis *bool                                `json:"enableSentimentAnalysis"`
	InjectedParameters      map[string]interface{}               `json:"injectedParameters"`
	Input                   *GoogleCloudDialogflowCxV3QueryInput `json:"input"`
	IsWebhookEnabled        *bool                                `json:"isWebhookEnabled"`
}
