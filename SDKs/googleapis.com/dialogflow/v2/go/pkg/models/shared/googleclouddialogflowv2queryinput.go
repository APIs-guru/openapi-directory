package shared

type GoogleCloudDialogflowV2QueryInput struct {
	AudioConfig *GoogleCloudDialogflowV2InputAudioConfig `json:"audioConfig"`
	Event       *GoogleCloudDialogflowV2EventInput       `json:"event"`
	Text        *GoogleCloudDialogflowV2TextInput        `json:"text"`
}
