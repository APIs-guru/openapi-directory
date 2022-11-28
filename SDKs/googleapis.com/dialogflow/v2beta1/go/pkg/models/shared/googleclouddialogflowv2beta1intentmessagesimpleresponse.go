package shared

// GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse
// The simple response message containing speech or text.
type GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse struct {
	DisplayText  *string `json:"displayText,omitempty"`
	Ssml         *string `json:"ssml,omitempty"`
	TextToSpeech *string `json:"textToSpeech,omitempty"`
}
