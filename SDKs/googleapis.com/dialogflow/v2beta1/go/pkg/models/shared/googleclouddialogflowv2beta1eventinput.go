package shared

// GoogleCloudDialogflowV2beta1EventInput
// Events allow for matching intents by event name instead of the natural language input. For instance, input “ can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
type GoogleCloudDialogflowV2beta1EventInput struct {
	LanguageCode *string                `json:"languageCode,omitempty"`
	Name         *string                `json:"name,omitempty"`
	Parameters   map[string]interface{} `json:"parameters,omitempty"`
}
