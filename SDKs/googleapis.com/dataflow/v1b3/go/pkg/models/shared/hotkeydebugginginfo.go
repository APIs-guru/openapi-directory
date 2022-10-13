package shared

type HotKeyDebuggingInfo struct {
	DetectedHotKeys map[string]HotKeyInfo `json:"detectedHotKeys"`
}
