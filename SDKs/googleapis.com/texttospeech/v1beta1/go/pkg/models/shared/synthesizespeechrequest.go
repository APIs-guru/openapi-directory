package shared

type SynthesizeSpeechRequestEnableTimePointingEnum string

const (
	SynthesizeSpeechRequestEnableTimePointingEnumTimepointTypeUnspecified SynthesizeSpeechRequestEnableTimePointingEnum = "TIMEPOINT_TYPE_UNSPECIFIED"
	SynthesizeSpeechRequestEnableTimePointingEnumSsmlMark                 SynthesizeSpeechRequestEnableTimePointingEnum = "SSML_MARK"
)

type SynthesizeSpeechRequest struct {
	AudioConfig        *AudioConfig                                    `json:"audioConfig"`
	EnableTimePointing []SynthesizeSpeechRequestEnableTimePointingEnum `json:"enableTimePointing"`
	Input              *SynthesisInput                                 `json:"input"`
	Voice              *VoiceSelectionParams                           `json:"voice"`
}
