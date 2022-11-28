package shared

// ReportResponse
// Response message for the Report method.
type ReportResponse struct {
	ReportErrors     []ReportError `json:"reportErrors,omitempty"`
	ServiceConfigID  *string       `json:"serviceConfigId,omitempty"`
	ServiceRolloutID *string       `json:"serviceRolloutId,omitempty"`
}
