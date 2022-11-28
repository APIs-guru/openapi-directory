package shared

// GoogleCloudDialogflowV2IntentMessageSimpleResponse
// The simple response message containing speech or text.
type GoogleCloudDialogflowV2IntentMessageSimpleResponse struct {
	DisplayText  *string `json:"displayText,omitempty"`
	Ssml         *string `json:"ssml,omitempty"`
	TextToSpeech *string `json:"textToSpeech,omitempty"`
}
