package shared

// SourceConfig
// Configurations for a source while processing a Search or Suggest request.
type SourceConfig struct {
	CrowdingConfig *SourceCrowdingConfig `json:"crowdingConfig,omitempty"`
	ScoringConfig  *SourceScoringConfig  `json:"scoringConfig,omitempty"`
	Source         *Source               `json:"source,omitempty"`
}
