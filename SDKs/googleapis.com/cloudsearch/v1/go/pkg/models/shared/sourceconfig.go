package shared



type SourceConfig struct {
    CrowdingConfig *SourceCrowdingConfig `json:"crowdingConfig,omitempty"`
    ScoringConfig *SourceScoringConfig `json:"scoringConfig,omitempty"`
    Source *Source `json:"source,omitempty"`
    
}

