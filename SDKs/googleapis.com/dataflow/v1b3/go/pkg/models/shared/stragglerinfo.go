package shared

// StragglerInfo
// Information useful for straggler identification and debugging.
type StragglerInfo struct {
	Causes    map[string]StragglerDebuggingInfo `json:"causes,omitempty"`
	StartTime *string                           `json:"startTime,omitempty"`
}
