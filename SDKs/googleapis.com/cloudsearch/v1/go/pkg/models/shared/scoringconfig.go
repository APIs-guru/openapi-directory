package shared

type ScoringConfig struct {
	DisableFreshness       *bool `json:"disableFreshness"`
	DisablePersonalization *bool `json:"disablePersonalization"`
}
