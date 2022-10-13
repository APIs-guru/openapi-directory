package shared

type GoogleCloudDialogflowCxV3QueryInput struct {
	Audio        *GoogleCloudDialogflowCxV3AudioInput  `json:"audio"`
	Dtmf         *GoogleCloudDialogflowCxV3DtmfInput   `json:"dtmf"`
	Event        *GoogleCloudDialogflowCxV3EventInput  `json:"event"`
	Intent       *GoogleCloudDialogflowCxV3IntentInput `json:"intent"`
	LanguageCode *string                               `json:"languageCode"`
	Text         *GoogleCloudDialogflowCxV3TextInput   `json:"text"`
}
