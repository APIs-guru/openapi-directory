package shared

type SourceMetadata struct {
	EstimatedSizeBytes *string `json:"estimatedSizeBytes,omitempty"`
	Infinite           *bool   `json:"infinite,omitempty"`
	ProducesSortedKeys *bool   `json:"producesSortedKeys,omitempty"`
}
