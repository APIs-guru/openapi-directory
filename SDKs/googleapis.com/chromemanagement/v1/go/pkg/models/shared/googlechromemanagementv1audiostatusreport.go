package shared

// GoogleChromeManagementV1AudioStatusReport
// Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
type GoogleChromeManagementV1AudioStatusReport struct {
	InputDevice  *string `json:"inputDevice,omitempty"`
	InputGain    *int32  `json:"inputGain,omitempty"`
	InputMute    *bool   `json:"inputMute,omitempty"`
	OutputDevice *string `json:"outputDevice,omitempty"`
	OutputMute   *bool   `json:"outputMute,omitempty"`
	OutputVolume *int32  `json:"outputVolume,omitempty"`
	ReportTime   *string `json:"reportTime,omitempty"`
}
