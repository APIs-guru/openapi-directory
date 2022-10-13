package shared

type SourceMetadata struct {
	EstimatedSizeBytes *string `json:"estimatedSizeBytes"`
	Infinite           *bool   `json:"infinite"`
	ProducesSortedKeys *bool   `json:"producesSortedKeys"`
}
