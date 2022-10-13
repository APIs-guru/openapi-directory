package shared

type GoogleCloudDialogflowV2beta1QueryInput struct {
	AudioConfig *GoogleCloudDialogflowV2beta1InputAudioConfig    `json:"audioConfig"`
	Dtmf        *GoogleCloudDialogflowV2beta1TelephonyDtmfEvents `json:"dtmf"`
	Event       *GoogleCloudDialogflowV2beta1EventInput          `json:"event"`
	Text        *GoogleCloudDialogflowV2beta1TextInput           `json:"text"`
}
