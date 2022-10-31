package shared




type SourceScoringConfigSourceImportanceEnum string

const (
    SourceScoringConfigSourceImportanceEnumDefault SourceScoringConfigSourceImportanceEnum = "DEFAULT"
SourceScoringConfigSourceImportanceEnumLow SourceScoringConfigSourceImportanceEnum = "LOW"
SourceScoringConfigSourceImportanceEnumHigh SourceScoringConfigSourceImportanceEnum = "HIGH"
)


type SourceScoringConfig struct {
    SourceImportance *SourceScoringConfigSourceImportanceEnum `json:"sourceImportance,omitempty"`
    
}

