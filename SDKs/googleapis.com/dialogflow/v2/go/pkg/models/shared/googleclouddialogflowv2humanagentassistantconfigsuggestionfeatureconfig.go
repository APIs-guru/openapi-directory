package shared

// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig
// Config for suggestion features.
type GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig struct {
	ConversationModelConfig    *GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig   `json:"conversationModelConfig,omitempty"`
	ConversationProcessConfig  *GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig `json:"conversationProcessConfig,omitempty"`
	EnableEventBasedSuggestion *bool                                                                      `json:"enableEventBasedSuggestion,omitempty"`
	QueryConfig                *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig     `json:"queryConfig,omitempty"`
	SuggestionFeature          *GoogleCloudDialogflowV2SuggestionFeature                                  `json:"suggestionFeature,omitempty"`
	SuggestionTriggerSettings  *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings `json:"suggestionTriggerSettings,omitempty"`
}
