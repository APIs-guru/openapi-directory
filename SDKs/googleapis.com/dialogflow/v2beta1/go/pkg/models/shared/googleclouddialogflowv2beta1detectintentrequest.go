package shared

type GoogleCloudDialogflowV2beta1DetectIntentRequest struct {
	InputAudio            *string                                        `json:"inputAudio"`
	OutputAudioConfig     *GoogleCloudDialogflowV2beta1OutputAudioConfig `json:"outputAudioConfig"`
	OutputAudioConfigMask *string                                        `json:"outputAudioConfigMask"`
	QueryInput            *GoogleCloudDialogflowV2beta1QueryInput        `json:"queryInput"`
	QueryParams           *GoogleCloudDialogflowV2beta1QueryParameters   `json:"queryParams"`
}
