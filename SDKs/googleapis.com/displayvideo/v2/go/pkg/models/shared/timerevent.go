package shared

type TimerEvent struct {
	Name          *string `json:"name,omitempty"`
	ReportingName *string `json:"reportingName,omitempty"`
}
