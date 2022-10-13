package shared

type GoogleChromeManagementV1AudioStatusReport struct {
	InputDevice  *string `json:"inputDevice"`
	InputGain    *int32  `json:"inputGain"`
	InputMute    *bool   `json:"inputMute"`
	OutputDevice *string `json:"outputDevice"`
	OutputMute   *bool   `json:"outputMute"`
	OutputVolume *int32  `json:"outputVolume"`
	ReportTime   *string `json:"reportTime"`
}
