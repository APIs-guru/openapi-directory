package shared

type StragglerInfo struct {
	Causes    map[string]StragglerDebuggingInfo `json:"causes,omitempty"`
	StartTime *string                           `json:"startTime,omitempty"`
}
