package shared

type ReportRequest struct {
	Operations      []AttributeContext `json:"operations"`
	ServiceConfigID *string            `json:"serviceConfigId"`
}
