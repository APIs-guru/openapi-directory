package shared

// HotKeyDebuggingInfo
// Information useful for debugging a hot key detection.
type HotKeyDebuggingInfo struct {
	DetectedHotKeys map[string]HotKeyInfo `json:"detectedHotKeys,omitempty"`
}
