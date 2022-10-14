package shared

type GoogleCloudDialogflowCxV3beta1QueryInput struct {
	Audio        *GoogleCloudDialogflowCxV3beta1AudioInput  `json:"audio,omitempty"`
	Dtmf         *GoogleCloudDialogflowCxV3beta1DtmfInput   `json:"dtmf,omitempty"`
	Event        *GoogleCloudDialogflowCxV3beta1EventInput  `json:"event,omitempty"`
	Intent       *GoogleCloudDialogflowCxV3beta1IntentInput `json:"intent,omitempty"`
	LanguageCode *string                                    `json:"languageCode,omitempty"`
	Text         *GoogleCloudDialogflowCxV3beta1TextInput   `json:"text,omitempty"`
}
