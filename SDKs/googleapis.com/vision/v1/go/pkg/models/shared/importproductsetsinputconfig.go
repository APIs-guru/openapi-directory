package shared

// ImportProductSetsInputConfig
// The input content for the `ImportProductSets` method.
type ImportProductSetsInputConfig struct {
	GcsSource *ImportProductSetsGcsSource `json:"gcsSource,omitempty"`
}
