package shared

// GoogleChromeManagementV1NetworkDiagnosticsReport
// Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.
type GoogleChromeManagementV1NetworkDiagnosticsReport struct {
	HTTPSLatencyData *GoogleChromeManagementV1HTTPSLatencyRoutineData `json:"httpsLatencyData,omitempty"`
	ReportTime       *string                                          `json:"reportTime,omitempty"`
}
