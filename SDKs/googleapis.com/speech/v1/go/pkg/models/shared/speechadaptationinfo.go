package shared

// SpeechAdaptationInfo
// Information on speech adaptation use in results
type SpeechAdaptationInfo struct {
	AdaptationTimeout *bool   `json:"adaptationTimeout,omitempty"`
	TimeoutMessage    *string `json:"timeoutMessage,omitempty"`
}
