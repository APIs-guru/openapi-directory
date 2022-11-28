package shared

// GoogleChromeManagementV1StorageStatusReport
// Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
type GoogleChromeManagementV1StorageStatusReport struct {
	Disk       []GoogleChromeManagementV1DiskInfo `json:"disk,omitempty"`
	ReportTime *string                            `json:"reportTime,omitempty"`
}
