package shared

type GoogleCloudDialogflowV2DetectIntentRequest struct {
	InputAudio            *string                                   `json:"inputAudio"`
	OutputAudioConfig     *GoogleCloudDialogflowV2OutputAudioConfig `json:"outputAudioConfig"`
	OutputAudioConfigMask *string                                   `json:"outputAudioConfigMask"`
	QueryInput            *GoogleCloudDialogflowV2QueryInput        `json:"queryInput"`
	QueryParams           *GoogleCloudDialogflowV2QueryParameters   `json:"queryParams"`
}
