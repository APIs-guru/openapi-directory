package shared

type SourceScoringConfigSourceImportanceEnum string

const (
	SourceScoringConfigSourceImportanceEnumDefault SourceScoringConfigSourceImportanceEnum = "DEFAULT"
	SourceScoringConfigSourceImportanceEnumLow     SourceScoringConfigSourceImportanceEnum = "LOW"
	SourceScoringConfigSourceImportanceEnumHigh    SourceScoringConfigSourceImportanceEnum = "HIGH"
)

// SourceScoringConfig
// Set the scoring configuration. This allows modifying the ranking of results for a source.
type SourceScoringConfig struct {
	SourceImportance *SourceScoringConfigSourceImportanceEnum `json:"sourceImportance,omitempty"`
}
