package shared

// ReportRequest
// Request message for the Report method.
type ReportRequest struct {
	Operations      []Operation `json:"operations,omitempty"`
	ServiceConfigID *string     `json:"serviceConfigId,omitempty"`
}
