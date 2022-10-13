package shared

type SourceConfig struct {
	CrowdingConfig *SourceCrowdingConfig `json:"crowdingConfig"`
	ScoringConfig  *SourceScoringConfig  `json:"scoringConfig"`
	Source         *Source               `json:"source"`
}
