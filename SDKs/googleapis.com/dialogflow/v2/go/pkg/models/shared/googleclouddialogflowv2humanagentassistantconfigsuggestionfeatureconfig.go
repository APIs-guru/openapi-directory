package shared

type GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig struct {
	ConversationModelConfig    *GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig   `json:"conversationModelConfig"`
	ConversationProcessConfig  *GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig `json:"conversationProcessConfig"`
	EnableEventBasedSuggestion *bool                                                                      `json:"enableEventBasedSuggestion"`
	QueryConfig                *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig     `json:"queryConfig"`
	SuggestionFeature          *GoogleCloudDialogflowV2SuggestionFeature                                  `json:"suggestionFeature"`
	SuggestionTriggerSettings  *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings `json:"suggestionTriggerSettings"`
}
