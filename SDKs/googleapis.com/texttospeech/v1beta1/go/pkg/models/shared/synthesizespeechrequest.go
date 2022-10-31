package shared




type SynthesizeSpeechRequestEnableTimePointingEnum string

const (
    SynthesizeSpeechRequestEnableTimePointingEnumTimepointTypeUnspecified SynthesizeSpeechRequestEnableTimePointingEnum = "TIMEPOINT_TYPE_UNSPECIFIED"
SynthesizeSpeechRequestEnableTimePointingEnumSsmlMark SynthesizeSpeechRequestEnableTimePointingEnum = "SSML_MARK"
)


type SynthesizeSpeechRequest struct {
    AudioConfig *AudioConfig `json:"audioConfig,omitempty"`
    EnableTimePointing []SynthesizeSpeechRequestEnableTimePointingEnum `json:"enableTimePointing,omitempty"`
    Input *SynthesisInput `json:"input,omitempty"`
    Voice *VoiceSelectionParams `json:"voice,omitempty"`
    
}

