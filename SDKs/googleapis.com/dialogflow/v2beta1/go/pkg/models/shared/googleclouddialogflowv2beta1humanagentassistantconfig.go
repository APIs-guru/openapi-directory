package shared

type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig struct {
	EndUserSuggestionConfig    *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig      `json:"endUserSuggestionConfig"`
	HumanAgentSuggestionConfig *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig      `json:"humanAgentSuggestionConfig"`
	MessageAnalysisConfig      *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig `json:"messageAnalysisConfig"`
	NotificationConfig         *GoogleCloudDialogflowV2beta1NotificationConfig                             `json:"notificationConfig"`
}
