package shared

// GoogleCloudDialogflowV2QueryInput
// Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text,. 3. An event that specifies which intent to trigger.
type GoogleCloudDialogflowV2QueryInput struct {
	AudioConfig *GoogleCloudDialogflowV2InputAudioConfig `json:"audioConfig,omitempty"`
	Event       *GoogleCloudDialogflowV2EventInput       `json:"event,omitempty"`
	Text        *GoogleCloudDialogflowV2TextInput        `json:"text,omitempty"`
}
