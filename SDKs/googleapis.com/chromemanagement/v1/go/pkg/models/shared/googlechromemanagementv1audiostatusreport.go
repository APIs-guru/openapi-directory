package shared



type GoogleChromeManagementV1AudioStatusReport struct {
    InputDevice *string `json:"inputDevice,omitempty"`
    InputGain *int32 `json:"inputGain,omitempty"`
    InputMute *bool `json:"inputMute,omitempty"`
    OutputDevice *string `json:"outputDevice,omitempty"`
    OutputMute *bool `json:"outputMute,omitempty"`
    OutputVolume *int32 `json:"outputVolume,omitempty"`
    ReportTime *string `json:"reportTime,omitempty"`
    
}

