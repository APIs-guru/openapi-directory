package shared

type GoogleCloudDialogflowCxV3beta1Agent struct {
	AdvancedSettings         *GoogleCloudDialogflowCxV3beta1AdvancedSettings     `json:"advancedSettings"`
	AvatarURI                *string                                             `json:"avatarUri"`
	DefaultLanguageCode      *string                                             `json:"defaultLanguageCode"`
	Description              *string                                             `json:"description"`
	DisplayName              *string                                             `json:"displayName"`
	EnableSpellCorrection    *bool                                               `json:"enableSpellCorrection"`
	EnableStackdriverLogging *bool                                               `json:"enableStackdriverLogging"`
	Locked                   *bool                                               `json:"locked"`
	Name                     *string                                             `json:"name"`
	SecuritySettings         *string                                             `json:"securitySettings"`
	SpeechToTextSettings     *GoogleCloudDialogflowCxV3beta1SpeechToTextSettings `json:"speechToTextSettings"`
	StartFlow                *string                                             `json:"startFlow"`
	SupportedLanguageCodes   []string                                            `json:"supportedLanguageCodes"`
	TimeZone                 *string                                             `json:"timeZone"`
}
