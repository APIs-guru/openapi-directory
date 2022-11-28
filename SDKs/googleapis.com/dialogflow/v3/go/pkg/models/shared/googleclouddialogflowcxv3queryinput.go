package shared

// GoogleCloudDialogflowCxV3QueryInput
// Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
type GoogleCloudDialogflowCxV3QueryInput struct {
	Audio        *GoogleCloudDialogflowCxV3AudioInput  `json:"audio,omitempty"`
	Dtmf         *GoogleCloudDialogflowCxV3DtmfInput   `json:"dtmf,omitempty"`
	Event        *GoogleCloudDialogflowCxV3EventInput  `json:"event,omitempty"`
	Intent       *GoogleCloudDialogflowCxV3IntentInput `json:"intent,omitempty"`
	LanguageCode *string                               `json:"languageCode,omitempty"`
	Text         *GoogleCloudDialogflowCxV3TextInput   `json:"text,omitempty"`
}
