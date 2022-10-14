package shared

type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig struct {
	ConversationModelConfig    *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig   `json:"conversationModelConfig,omitempty"`
	ConversationProcessConfig  *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig `json:"conversationProcessConfig,omitempty"`
	EnableEventBasedSuggestion *bool                                                                           `json:"enableEventBasedSuggestion,omitempty"`
	QueryConfig                *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig     `json:"queryConfig,omitempty"`
	SuggestionFeature          *GoogleCloudDialogflowV2beta1SuggestionFeature                                  `json:"suggestionFeature,omitempty"`
	SuggestionTriggerSettings  *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings `json:"suggestionTriggerSettings,omitempty"`
}
