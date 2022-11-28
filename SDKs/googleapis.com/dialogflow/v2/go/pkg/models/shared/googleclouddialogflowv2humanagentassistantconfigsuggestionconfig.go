package shared

// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig
// Detail human agent assistant config.
type GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig struct {
	FeatureConfigs           []GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig `json:"featureConfigs,omitempty"`
	GroupSuggestionResponses *bool                                                                     `json:"groupSuggestionResponses,omitempty"`
}
