package shared

// GoogleCloudDialogflowV2HumanAgentAssistantConfig
// Defines the Human Agent Assist to connect to a conversation.
type GoogleCloudDialogflowV2HumanAgentAssistantConfig struct {
	EndUserSuggestionConfig    *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig      `json:"endUserSuggestionConfig,omitempty"`
	HumanAgentSuggestionConfig *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig      `json:"humanAgentSuggestionConfig,omitempty"`
	MessageAnalysisConfig      *GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig `json:"messageAnalysisConfig,omitempty"`
	NotificationConfig         *GoogleCloudDialogflowV2NotificationConfig                             `json:"notificationConfig,omitempty"`
}
