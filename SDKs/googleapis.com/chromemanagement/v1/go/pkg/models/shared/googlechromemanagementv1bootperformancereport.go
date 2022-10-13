package shared

type GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum string

const (
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumShutdownReasonUnspecified GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "SHUTDOWN_REASON_UNSPECIFIED"
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumUserRequest               GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "USER_REQUEST"
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumSystemUpdate              GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "SYSTEM_UPDATE"
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumLowBattery                GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "LOW_BATTERY"
	GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumOther                     GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "OTHER"
)

type GoogleChromeManagementV1BootPerformanceReport struct {
	BootUpDuration   *string                                                          `json:"bootUpDuration"`
	BootUpTime       *string                                                          `json:"bootUpTime"`
	ReportTime       *string                                                          `json:"reportTime"`
	ShutdownDuration *string                                                          `json:"shutdownDuration"`
	ShutdownReason   *GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum `json:"shutdownReason"`
	ShutdownTime     *string                                                          `json:"shutdownTime"`
}
