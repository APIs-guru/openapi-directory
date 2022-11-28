package shared

// GoogleCloudDialogflowV2beta1ConversationProfile
// Defines the services to connect to incoming Dialogflow conversations.
type GoogleCloudDialogflowV2beta1ConversationProfile struct {
	AutomatedAgentConfig              *GoogleCloudDialogflowV2beta1AutomatedAgentConfig      `json:"automatedAgentConfig,omitempty"`
	CreateTime                        *string                                                `json:"createTime,omitempty"`
	DisplayName                       *string                                                `json:"displayName,omitempty"`
	HumanAgentAssistantConfig         *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig `json:"humanAgentAssistantConfig,omitempty"`
	HumanAgentHandoffConfig           *GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig   `json:"humanAgentHandoffConfig,omitempty"`
	LanguageCode                      *string                                                `json:"languageCode,omitempty"`
	LoggingConfig                     *GoogleCloudDialogflowV2beta1LoggingConfig             `json:"loggingConfig,omitempty"`
	Name                              *string                                                `json:"name,omitempty"`
	NewMessageEventNotificationConfig *GoogleCloudDialogflowV2beta1NotificationConfig        `json:"newMessageEventNotificationConfig,omitempty"`
	NotificationConfig                *GoogleCloudDialogflowV2beta1NotificationConfig        `json:"notificationConfig,omitempty"`
	SecuritySettings                  *string                                                `json:"securitySettings,omitempty"`
	SttConfig                         *GoogleCloudDialogflowV2beta1SpeechToTextConfig        `json:"sttConfig,omitempty"`
	TimeZone                          *string                                                `json:"timeZone,omitempty"`
	UpdateTime                        *string                                                `json:"updateTime,omitempty"`
}

// GoogleCloudDialogflowV2beta1ConversationProfileInput
// Defines the services to connect to incoming Dialogflow conversations.
type GoogleCloudDialogflowV2beta1ConversationProfileInput struct {
	AutomatedAgentConfig              *GoogleCloudDialogflowV2beta1AutomatedAgentConfig      `json:"automatedAgentConfig,omitempty"`
	DisplayName                       *string                                                `json:"displayName,omitempty"`
	HumanAgentAssistantConfig         *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig `json:"humanAgentAssistantConfig,omitempty"`
	HumanAgentHandoffConfig           *GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig   `json:"humanAgentHandoffConfig,omitempty"`
	LanguageCode                      *string                                                `json:"languageCode,omitempty"`
	LoggingConfig                     *GoogleCloudDialogflowV2beta1LoggingConfig             `json:"loggingConfig,omitempty"`
	Name                              *string                                                `json:"name,omitempty"`
	NewMessageEventNotificationConfig *GoogleCloudDialogflowV2beta1NotificationConfig        `json:"newMessageEventNotificationConfig,omitempty"`
	NotificationConfig                *GoogleCloudDialogflowV2beta1NotificationConfig        `json:"notificationConfig,omitempty"`
	SecuritySettings                  *string                                                `json:"securitySettings,omitempty"`
	SttConfig                         *GoogleCloudDialogflowV2beta1SpeechToTextConfig        `json:"sttConfig,omitempty"`
	TimeZone                          *string                                                `json:"timeZone,omitempty"`
}
