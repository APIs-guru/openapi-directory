package shared

type GenerateConfigReportResponse struct {
	ChangeReports []ChangeReport `json:"changeReports"`
	Diagnostics   []Diagnostic   `json:"diagnostics"`
	ID            *string        `json:"id"`
	ServiceName   *string        `json:"serviceName"`
}
