package shared

// GoogleCloudDialogflowV2beta1QueryInput
// Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text. 3. An event that specifies which intent to trigger.
type GoogleCloudDialogflowV2beta1QueryInput struct {
	AudioConfig *GoogleCloudDialogflowV2beta1InputAudioConfig    `json:"audioConfig,omitempty"`
	Dtmf        *GoogleCloudDialogflowV2beta1TelephonyDtmfEvents `json:"dtmf,omitempty"`
	Event       *GoogleCloudDialogflowV2beta1EventInput          `json:"event,omitempty"`
	Text        *GoogleCloudDialogflowV2beta1TextInput           `json:"text,omitempty"`
}
