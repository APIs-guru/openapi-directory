package shared

// GoogleChromeManagementV1GraphicsStatusReport
// Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
type GoogleChromeManagementV1GraphicsStatusReport struct {
	Displays   []GoogleChromeManagementV1DisplayInfo `json:"displays,omitempty"`
	ReportTime *string                               `json:"reportTime,omitempty"`
}
