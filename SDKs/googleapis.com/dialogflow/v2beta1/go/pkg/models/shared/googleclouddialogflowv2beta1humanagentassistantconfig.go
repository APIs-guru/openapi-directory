package shared

type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig struct {
	EndUserSuggestionConfig    *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig      `json:"endUserSuggestionConfig,omitempty"`
	HumanAgentSuggestionConfig *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig      `json:"humanAgentSuggestionConfig,omitempty"`
	MessageAnalysisConfig      *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig `json:"messageAnalysisConfig,omitempty"`
	NotificationConfig         *GoogleCloudDialogflowV2beta1NotificationConfig                             `json:"notificationConfig,omitempty"`
}
