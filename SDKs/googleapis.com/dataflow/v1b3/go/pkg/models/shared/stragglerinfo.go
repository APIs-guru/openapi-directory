package shared

type StragglerInfo struct {
	Causes    map[string]StragglerDebuggingInfo `json:"causes"`
	StartTime *string                           `json:"startTime"`
}
