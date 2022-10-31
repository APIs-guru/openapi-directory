package shared

type Input struct {
	Key                 *string              `json:"key,omitempty"`
	PreprocessingConfig *PreprocessingConfig `json:"preprocessingConfig,omitempty"`
	URI                 *string              `json:"uri,omitempty"`
}
