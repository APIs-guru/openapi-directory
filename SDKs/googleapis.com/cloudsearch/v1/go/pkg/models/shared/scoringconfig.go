package shared

// ScoringConfig
// Scoring configurations for a source while processing a Search or Suggest request.
type ScoringConfig struct {
	DisableFreshness       *bool `json:"disableFreshness,omitempty"`
	DisablePersonalization *bool `json:"disablePersonalization,omitempty"`
}
