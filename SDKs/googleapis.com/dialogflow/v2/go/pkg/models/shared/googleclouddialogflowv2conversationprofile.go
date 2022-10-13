package shared

type GoogleCloudDialogflowV2ConversationProfile struct {
	AutomatedAgentConfig              *GoogleCloudDialogflowV2AutomatedAgentConfig      `json:"automatedAgentConfig"`
	CreateTime                        *string                                           `json:"createTime"`
	DisplayName                       *string                                           `json:"displayName"`
	HumanAgentAssistantConfig         *GoogleCloudDialogflowV2HumanAgentAssistantConfig `json:"humanAgentAssistantConfig"`
	HumanAgentHandoffConfig           *GoogleCloudDialogflowV2HumanAgentHandoffConfig   `json:"humanAgentHandoffConfig"`
	LanguageCode                      *string                                           `json:"languageCode"`
	LoggingConfig                     *GoogleCloudDialogflowV2LoggingConfig             `json:"loggingConfig"`
	Name                              *string                                           `json:"name"`
	NewMessageEventNotificationConfig *GoogleCloudDialogflowV2NotificationConfig        `json:"newMessageEventNotificationConfig"`
	NotificationConfig                *GoogleCloudDialogflowV2NotificationConfig        `json:"notificationConfig"`
	SecuritySettings                  *string                                           `json:"securitySettings"`
	SttConfig                         *GoogleCloudDialogflowV2SpeechToTextConfig        `json:"sttConfig"`
	TimeZone                          *string                                           `json:"timeZone"`
	UpdateTime                        *string                                           `json:"updateTime"`
}
