package shared




type GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum string

const (
    GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumShutdownReasonUnspecified GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "SHUTDOWN_REASON_UNSPECIFIED"
GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumUserRequest GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "USER_REQUEST"
GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumSystemUpdate GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "SYSTEM_UPDATE"
GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumLowBattery GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "LOW_BATTERY"
GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnumOther GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum = "OTHER"
)


type GoogleChromeManagementV1BootPerformanceReport struct {
    BootUpDuration *string `json:"bootUpDuration,omitempty"`
    BootUpTime *string `json:"bootUpTime,omitempty"`
    ReportTime *string `json:"reportTime,omitempty"`
    ShutdownDuration *string `json:"shutdownDuration,omitempty"`
    ShutdownReason *GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum `json:"shutdownReason,omitempty"`
    ShutdownTime *string `json:"shutdownTime,omitempty"`
    
}

