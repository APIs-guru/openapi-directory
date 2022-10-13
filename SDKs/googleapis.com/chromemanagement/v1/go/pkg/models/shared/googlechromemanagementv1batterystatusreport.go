package shared

type GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum string

const (
	GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryHealthUnspecified GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_HEALTH_UNSPECIFIED"
	GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryHealthNormal      GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_HEALTH_NORMAL"
	GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryReplaceSoon       GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_REPLACE_SOON"
	GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryReplaceNow        GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_REPLACE_NOW"
)

type GoogleChromeManagementV1BatteryStatusReport struct {
	BatteryHealth      *GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum `json:"batteryHealth"`
	CycleCount         *int32                                                        `json:"cycleCount"`
	FullChargeCapacity *string                                                       `json:"fullChargeCapacity"`
	ReportTime         *string                                                       `json:"reportTime"`
	Sample             []GoogleChromeManagementV1BatterySampleReport                 `json:"sample"`
	SerialNumber       *string                                                       `json:"serialNumber"`
}
