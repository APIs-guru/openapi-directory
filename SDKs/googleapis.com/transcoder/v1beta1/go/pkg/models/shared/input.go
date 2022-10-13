package shared

type Input struct {
	Key                 *string              `json:"key"`
	PreprocessingConfig *PreprocessingConfig `json:"preprocessingConfig"`
	URI                 *string              `json:"uri"`
}
