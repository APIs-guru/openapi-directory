package shared

type GoogleCloudDialogflowV2beta1ConversationProfile struct {
	AutomatedAgentConfig              *GoogleCloudDialogflowV2beta1AutomatedAgentConfig      `json:"automatedAgentConfig"`
	CreateTime                        *string                                                `json:"createTime"`
	DisplayName                       *string                                                `json:"displayName"`
	HumanAgentAssistantConfig         *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig `json:"humanAgentAssistantConfig"`
	HumanAgentHandoffConfig           *GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig   `json:"humanAgentHandoffConfig"`
	LanguageCode                      *string                                                `json:"languageCode"`
	LoggingConfig                     *GoogleCloudDialogflowV2beta1LoggingConfig             `json:"loggingConfig"`
	Name                              *string                                                `json:"name"`
	NewMessageEventNotificationConfig *GoogleCloudDialogflowV2beta1NotificationConfig        `json:"newMessageEventNotificationConfig"`
	NotificationConfig                *GoogleCloudDialogflowV2beta1NotificationConfig        `json:"notificationConfig"`
	SecuritySettings                  *string                                                `json:"securitySettings"`
	SttConfig                         *GoogleCloudDialogflowV2beta1SpeechToTextConfig        `json:"sttConfig"`
	TimeZone                          *string                                                `json:"timeZone"`
	UpdateTime                        *string                                                `json:"updateTime"`
}
