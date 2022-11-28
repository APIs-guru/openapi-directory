package shared

// StragglerDebuggingInfo
// Information useful for debugging a straggler. Each type will provide specialized debugging information relevant for a particular cause. The StragglerDebuggingInfo will be 1:1 mapping to the StragglerCause enum.
type StragglerDebuggingInfo struct {
	HotKey *HotKeyDebuggingInfo `json:"hotKey,omitempty"`
}
