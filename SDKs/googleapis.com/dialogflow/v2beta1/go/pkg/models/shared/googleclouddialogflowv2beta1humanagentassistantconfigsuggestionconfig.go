package shared

// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig
// Detail human agent assistant config.
type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig struct {
	FeatureConfigs           []GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig `json:"featureConfigs,omitempty"`
	GroupSuggestionResponses *bool                                                                          `json:"groupSuggestionResponses,omitempty"`
}
