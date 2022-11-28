package shared

type GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum string

const (
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumShutdownReasonUnspecified GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "SHUTDOWN_REASON_UNSPECIFIED"
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumUserRequest               GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "USER_REQUEST"
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumSystemUpdate              GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "SYSTEM_UPDATE"
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumLowBattery                GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "LOW_BATTERY"
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumOther                     GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "OTHER"
)

// GoogleChromeManagementV1BootPerformanceReport
// Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
type GoogleChromeManagementV1BootPerformanceReport struct {
	BootUpDuration   *string                                                          `json:"bootUpDuration,omitempty"`
	BootUpTime       *string                                                          `json:"bootUpTime,omitempty"`
	ReportTime       *string                                                          `json:"reportTime,omitempty"`
	ShutdownDuration *string                                                          `json:"shutdownDuration,omitempty"`
	ShutdownReason   *GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum `json:"shutdownReason,omitempty"`
	ShutdownTime     *string                                                          `json:"shutdownTime,omitempty"`
}
