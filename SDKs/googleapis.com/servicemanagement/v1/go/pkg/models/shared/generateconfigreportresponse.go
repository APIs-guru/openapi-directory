package shared

type GenerateConfigReportResponse struct {
	ChangeReports []ChangeReport `json:"changeReports,omitempty"`
	Diagnostics   []Diagnostic   `json:"diagnostics,omitempty"`
	ID            *string        `json:"id,omitempty"`
	ServiceName   *string        `json:"serviceName,omitempty"`
}
