package shared

type ReportRequest struct {
	Operations      []Operation `json:"operations"`
	ServiceConfigID *string     `json:"serviceConfigId"`
}
