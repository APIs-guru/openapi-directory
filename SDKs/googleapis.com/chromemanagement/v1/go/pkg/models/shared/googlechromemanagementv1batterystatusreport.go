package shared

type GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum string

const (
	GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryHealthUnspecified GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_HEALTH_UNSPECIFIED"
	GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryHealthNormal      GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_HEALTH_NORMAL"
	GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryReplaceSoon       GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_REPLACE_SOON"
	GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryReplaceNow        GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_REPLACE_NOW"
)

// GoogleChromeManagementV1BatteryStatusReport
// Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
type GoogleChromeManagementV1BatteryStatusReport struct {
	BatteryHealth      *GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum `json:"batteryHealth,omitempty"`
	CycleCount         *int32                                                        `json:"cycleCount,omitempty"`
	FullChargeCapacity *string                                                       `json:"fullChargeCapacity,omitempty"`
	ReportTime         *string                                                       `json:"reportTime,omitempty"`
	Sample             []GoogleChromeManagementV1BatterySampleReport                 `json:"sample,omitempty"`
	SerialNumber       *string                                                       `json:"serialNumber,omitempty"`
}
