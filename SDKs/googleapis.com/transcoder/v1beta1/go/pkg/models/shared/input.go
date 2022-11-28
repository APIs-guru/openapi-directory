package shared

// Input
// Input asset.
type Input struct {
	Key                 *string              `json:"key,omitempty"`
	PreprocessingConfig *PreprocessingConfig `json:"preprocessingConfig,omitempty"`
	URI                 *string              `json:"uri,omitempty"`
}
