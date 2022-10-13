package shared

type GoogleCloudDialogflowV2HumanAgentAssistantConfig struct {
	EndUserSuggestionConfig    *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig      `json:"endUserSuggestionConfig"`
	HumanAgentSuggestionConfig *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig      `json:"humanAgentSuggestionConfig"`
	MessageAnalysisConfig      *GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig `json:"messageAnalysisConfig"`
	NotificationConfig         *GoogleCloudDialogflowV2NotificationConfig                             `json:"notificationConfig"`
}
