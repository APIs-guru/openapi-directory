package shared

type GoogleCloudDialogflowV2beta1QueryInput struct {
	AudioConfig *GoogleCloudDialogflowV2beta1InputAudioConfig    `json:"audioConfig,omitempty"`
	Dtmf        *GoogleCloudDialogflowV2beta1TelephonyDtmfEvents `json:"dtmf,omitempty"`
	Event       *GoogleCloudDialogflowV2beta1EventInput          `json:"event,omitempty"`
	Text        *GoogleCloudDialogflowV2beta1TextInput           `json:"text,omitempty"`
}
