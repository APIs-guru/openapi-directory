package shared

// GoogleCloudDialogflowCxV3beta1Agent
// Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, and so on to manage the conversation flows..
type GoogleCloudDialogflowCxV3beta1Agent struct {
	AdvancedSettings         *GoogleCloudDialogflowCxV3beta1AdvancedSettings     `json:"advancedSettings,omitempty"`
	AvatarURI                *string                                             `json:"avatarUri,omitempty"`
	DefaultLanguageCode      *string                                             `json:"defaultLanguageCode,omitempty"`
	Description              *string                                             `json:"description,omitempty"`
	DisplayName              *string                                             `json:"displayName,omitempty"`
	EnableSpellCorrection    *bool                                               `json:"enableSpellCorrection,omitempty"`
	EnableStackdriverLogging *bool                                               `json:"enableStackdriverLogging,omitempty"`
	Locked                   *bool                                               `json:"locked,omitempty"`
	Name                     *string                                             `json:"name,omitempty"`
	SecuritySettings         *string                                             `json:"securitySettings,omitempty"`
	SpeechToTextSettings     *GoogleCloudDialogflowCxV3beta1SpeechToTextSettings `json:"speechToTextSettings,omitempty"`
	StartFlow                *string                                             `json:"startFlow,omitempty"`
	SupportedLanguageCodes   []string                                            `json:"supportedLanguageCodes,omitempty"`
	TimeZone                 *string                                             `json:"timeZone,omitempty"`
}
