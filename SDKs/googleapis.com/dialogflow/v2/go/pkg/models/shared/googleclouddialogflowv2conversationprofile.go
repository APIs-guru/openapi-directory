package shared

// GoogleCloudDialogflowV2ConversationProfileInput
// Defines the services to connect to incoming Dialogflow conversations.
type GoogleCloudDialogflowV2ConversationProfileInput struct {
	AutomatedAgentConfig              *GoogleCloudDialogflowV2AutomatedAgentConfig      `json:"automatedAgentConfig,omitempty"`
	DisplayName                       *string                                           `json:"displayName,omitempty"`
	HumanAgentAssistantConfig         *GoogleCloudDialogflowV2HumanAgentAssistantConfig `json:"humanAgentAssistantConfig,omitempty"`
	HumanAgentHandoffConfig           *GoogleCloudDialogflowV2HumanAgentHandoffConfig   `json:"humanAgentHandoffConfig,omitempty"`
	LanguageCode                      *string                                           `json:"languageCode,omitempty"`
	LoggingConfig                     *GoogleCloudDialogflowV2LoggingConfig             `json:"loggingConfig,omitempty"`
	Name                              *string                                           `json:"name,omitempty"`
	NewMessageEventNotificationConfig *GoogleCloudDialogflowV2NotificationConfig        `json:"newMessageEventNotificationConfig,omitempty"`
	NotificationConfig                *GoogleCloudDialogflowV2NotificationConfig        `json:"notificationConfig,omitempty"`
	SecuritySettings                  *string                                           `json:"securitySettings,omitempty"`
	SttConfig                         *GoogleCloudDialogflowV2SpeechToTextConfig        `json:"sttConfig,omitempty"`
	TimeZone                          *string                                           `json:"timeZone,omitempty"`
}

// GoogleCloudDialogflowV2ConversationProfile
// Defines the services to connect to incoming Dialogflow conversations.
type GoogleCloudDialogflowV2ConversationProfile struct {
	AutomatedAgentConfig              *GoogleCloudDialogflowV2AutomatedAgentConfig      `json:"automatedAgentConfig,omitempty"`
	CreateTime                        *string                                           `json:"createTime,omitempty"`
	DisplayName                       *string                                           `json:"displayName,omitempty"`
	HumanAgentAssistantConfig         *GoogleCloudDialogflowV2HumanAgentAssistantConfig `json:"humanAgentAssistantConfig,omitempty"`
	HumanAgentHandoffConfig           *GoogleCloudDialogflowV2HumanAgentHandoffConfig   `json:"humanAgentHandoffConfig,omitempty"`
	LanguageCode                      *string                                           `json:"languageCode,omitempty"`
	LoggingConfig                     *GoogleCloudDialogflowV2LoggingConfig             `json:"loggingConfig,omitempty"`
	Name                              *string                                           `json:"name,omitempty"`
	NewMessageEventNotificationConfig *GoogleCloudDialogflowV2NotificationConfig        `json:"newMessageEventNotificationConfig,omitempty"`
	NotificationConfig                *GoogleCloudDialogflowV2NotificationConfig        `json:"notificationConfig,omitempty"`
	SecuritySettings                  *string                                           `json:"securitySettings,omitempty"`
	SttConfig                         *GoogleCloudDialogflowV2SpeechToTextConfig        `json:"sttConfig,omitempty"`
	TimeZone                          *string                                           `json:"timeZone,omitempty"`
	UpdateTime                        *string                                           `json:"updateTime,omitempty"`
}
