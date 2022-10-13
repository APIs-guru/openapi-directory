package shared

type GoogleCloudDialogflowCxV3beta1QueryInput struct {
	Audio        *GoogleCloudDialogflowCxV3beta1AudioInput  `json:"audio"`
	Dtmf         *GoogleCloudDialogflowCxV3beta1DtmfInput   `json:"dtmf"`
	Event        *GoogleCloudDialogflowCxV3beta1EventInput  `json:"event"`
	Intent       *GoogleCloudDialogflowCxV3beta1IntentInput `json:"intent"`
	LanguageCode *string                                    `json:"languageCode"`
	Text         *GoogleCloudDialogflowCxV3beta1TextInput   `json:"text"`
}
