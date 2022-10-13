package shared

type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig struct {
	ConversationModelConfig    *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig   `json:"conversationModelConfig"`
	ConversationProcessConfig  *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig `json:"conversationProcessConfig"`
	EnableEventBasedSuggestion *bool                                                                           `json:"enableEventBasedSuggestion"`
	QueryConfig                *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig     `json:"queryConfig"`
	SuggestionFeature          *GoogleCloudDialogflowV2beta1SuggestionFeature                                  `json:"suggestionFeature"`
	SuggestionTriggerSettings  *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings `json:"suggestionTriggerSettings"`
}
