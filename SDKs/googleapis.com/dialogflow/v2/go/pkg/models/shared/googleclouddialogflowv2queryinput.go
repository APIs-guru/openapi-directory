package shared

type GoogleCloudDialogflowV2QueryInput struct {
	AudioConfig *GoogleCloudDialogflowV2InputAudioConfig `json:"audioConfig,omitempty"`
	Event       *GoogleCloudDialogflowV2EventInput       `json:"event,omitempty"`
	Text        *GoogleCloudDialogflowV2TextInput        `json:"text,omitempty"`
}
