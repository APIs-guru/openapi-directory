package shared

// SourceMetadata
// Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.
type SourceMetadata struct {
	EstimatedSizeBytes *string `json:"estimatedSizeBytes,omitempty"`
	Infinite           *bool   `json:"infinite,omitempty"`
	ProducesSortedKeys *bool   `json:"producesSortedKeys,omitempty"`
}
