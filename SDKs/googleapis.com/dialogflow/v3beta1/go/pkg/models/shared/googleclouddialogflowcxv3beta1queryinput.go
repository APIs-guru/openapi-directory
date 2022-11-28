package shared

// GoogleCloudDialogflowCxV3beta1QueryInput
// Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
type GoogleCloudDialogflowCxV3beta1QueryInput struct {
	Audio        *GoogleCloudDialogflowCxV3beta1AudioInput  `json:"audio,omitempty"`
	Dtmf         *GoogleCloudDialogflowCxV3beta1DtmfInput   `json:"dtmf,omitempty"`
	Event        *GoogleCloudDialogflowCxV3beta1EventInput  `json:"event,omitempty"`
	Intent       *GoogleCloudDialogflowCxV3beta1IntentInput `json:"intent,omitempty"`
	LanguageCode *string                                    `json:"languageCode,omitempty"`
	Text         *GoogleCloudDialogflowCxV3beta1TextInput   `json:"text,omitempty"`
}
