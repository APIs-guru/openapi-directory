package shared

type GoogleChromeManagementV1NetworkDiagnosticsReport struct {
	HTTPSLatencyData *GoogleChromeManagementV1HTTPSLatencyRoutineData `json:"httpsLatencyData"`
	ReportTime       *string                                          `json:"reportTime"`
}
