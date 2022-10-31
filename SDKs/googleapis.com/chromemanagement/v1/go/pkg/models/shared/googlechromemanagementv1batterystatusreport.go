package shared




type GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum string

const (
    GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryHealthUnspecified GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_HEALTH_UNSPECIFIED"
GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryHealthNormal GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_HEALTH_NORMAL"
GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryReplaceSoon GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_REPLACE_SOON"
GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnumBatteryReplaceNow GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum = "BATTERY_REPLACE_NOW"
)


type GoogleChromeManagementV1BatteryStatusReport struct {
    BatteryHealth *GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum `json:"batteryHealth,omitempty"`
    CycleCount *int32 `json:"cycleCount,omitempty"`
    FullChargeCapacity *string `json:"fullChargeCapacity,omitempty"`
    ReportTime *string `json:"reportTime,omitempty"`
    Sample []GoogleChromeManagementV1BatterySampleReport `json:"sample,omitempty"`
    SerialNumber *string `json:"serialNumber,omitempty"`
    
}

