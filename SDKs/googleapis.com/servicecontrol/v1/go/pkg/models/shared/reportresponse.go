package shared

type ReportResponse struct {
	ReportErrors     []ReportError `json:"reportErrors"`
	ServiceConfigID  *string       `json:"serviceConfigId"`
	ServiceRolloutID *string       `json:"serviceRolloutId"`
}
